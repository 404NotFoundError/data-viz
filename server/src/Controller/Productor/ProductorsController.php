<?php

namespace App\Controller\Productor;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Productor;
use App\Entity\Country;
use App\Services\Curl;
use App\Entity\Wine;

/**
 * Productors Controller Class
 */
class ProductorsController extends AbstractController
{

    /**
     * Get the list of productors
     * 
     * @Route("/api/productors", name="app_productors", methods={"GET"})
     * 
     * @return Response
     */
    public function productors() : Response
    {
        // Prepare response
        $response = new Response;
        $response->headers->set('Content-Type', 'application/json');
        $response->setCharset('charset=UTF-8');

        // Quety builder
        $query = $this->getDoctrine()->getRepository(Productor::class)->createQueryBuilder('p');

        // Get the productors fields
        $query->select('
                 p.id, 
                 p.name, 
                 p.longitude, 
                 p.latitude, 
                 p.idCountry, 
                 c.continent as continent,  
                 c.name as country
             ')
             ->innerJoin(Country::class, 'c', 'WITH', 'p.idCountry = c.id');

        // List of productor
        $productors = $query->getQuery()->getResult();

        // Send response 
        $response->setStatusCode(Response::HTTP_OK);
        $response->setContent(json_encode($productors));

        if (getEnv('APP_ENV') === 'dev') {
            foreach ($productors as $key => $productor) {
                if (empty($productor['longitude']) || empty($productor['latitude'])) {
                    $this->checkLgtLat($productor['id']);
                }
            }
        }

        // Return response
        return $response->send();

    }

     /**
     * Set productor longitude and latitude
     * 
     * @param int $id, The productor id
     * 
     * @return void|bool 
     */
    private function checkLgtLat(int $id) : mixed
    {
        // Get the manager
        $entityManager = $this->getDoctrine()->getManager();
        $productor = $entityManager->getRepository(Productor::class)->find($id);
        $country = $entityManager->getRepository(Country::class)->find($productor->getIdCountry());

        if (!$country) {
            return false;
        }

        // Get the productor address
        $address = $country->getName() . ' ' . $country->getProvince() . ' ' . $country->getFirstRegion() . ' ' . $country->getSecondRegion();

        // Google api call
        $req = new Curl('https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($address) . '&key=' . getEnv('GOOGLE_API_KEY'));
        $req->setMethod('GET');
        $req->addHeader('Content-Type: application/json');
        $response = json_decode($req->getResponse(), true);

        if (!isset($response['results'][0])) {
            return false;
        }

        // Update productor lat and lgn
        $productor->setLongitude($response['results'][0]['geometry']['location']['lng'])
                  ->setLatitude($response['results'][0]['geometry']['location']['lat'])
                  ;

        $entityManager->flush();

    }
    

}
