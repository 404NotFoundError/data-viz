<?php

namespace App\Controller\Country;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\WineProductor;
use App\Entity\Productor;
use App\Entity\Country;
use App\Entity\Wines;
use App\Services\Curl;


class CountriesController extends AbstractController
{
    /**
     * Get a list of countries
     * 
     * @Route("/api/countries", name="countries")
     * 
     * @return Response
     */
    public function countries() : Response
    {
        // Get distinct country name
        $countries = $this->getDoctrine()
                          ->getManager()
                          ->getRepository(Country::class)
                          ->createQueryBuilder('c')
                          ->select('DISTINCT c.name')
                          ->getQuery()
                          ->getResult();

        foreach ($countries as $key => $country) {
           $country = $this->getDoctrine()->getRepository(Country::class)->findOneBy(['name' => $country['name']]);
           // Get country data    
           $countries[$key] = [
               'name'     => $country->getName(),
               'latitude' => $country->getLatitude(),
               'longitude' => $country->getLongitude(),
               'continent' => $country->getContinent()
           ];
        }

        // Check productore lgt and lat
        if (getEnv('APP_ENV') === 'dev') {
            foreach ($countries as $key => $country) {
                if (empty($country['longitude']) || empty($country['latitude'])) {
                    $this->checkLgtLat($country['id']);
                }
            }
        }
        
        // Response render
        return $this->json([
            'status' => 'success',
            'message' => 'OK',
            'countries' => $countries
        ]);
    }

    /**
     * Update productor longitude and latitude
     * 
     * @param int $id, The country id
     * 
     * @return void
     */
    private function checkLgtLat(int $id) : void
    {
        // Get the manager
        $entityManager = $this->getDoctrine()->getManager();
        $country = $entityManager->getRepository(Country::class)->find($id);

        $name = $country->getName() === 'US' ? 'North America' : $country->getName();

        // Google api call
        $req = new Curl('https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($name) . '&key=' . getEnv('GOOGLE_API_KEY'));
        $req->setMethod('GET');
        $req->addHeader('Content-Type: application/json');
        $response = json_decode($req->getResponse(), true);

        // Get the continent
        $addressComponent =  $response['results'][0]['address_components'];
        foreach ($addressComponent as $key => $address) {
            if (in_array('country', $address['types'])) {
                $country->setContinent($this->getParameter('continents')[$address['short_name']]);
            }
        }

        // Update country
        $country->setLongitude($response['results'][0]['geometry']['location']['lng'])
                ->setLatitude($response['results'][0]['geometry']['location']['lat'])
                ;

        // Save country
        $entityManager->flush();

    }


}
