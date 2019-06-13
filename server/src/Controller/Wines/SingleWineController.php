<?php

namespace App\Controller\Wines;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\WineProductor;
use App\Entity\TasteWine;
use App\Entity\Productor;
use App\Entity\Country;
use App\Entity\Taste;
use App\Entity\Wine;


/**
 * SingleWineController
 */
class SingleWineController extends AbstractController
{

    /**
     * Display a wine about his id
     * 
     * @Route("/api/wine/{id}", methods={"GET"}, name="app_single_wine")
     * 
     * @param int $id, The wine id
     * @param Request $request
     * 
     * @return Response (json)
     */
    public function singleWine(int $id, Request $request) : Response
    {

        // Get string 
        $wine = $this->getDoctrine()
                      ->getRepository(Wine::class)
                      ->createQueryBuilder('w')
                      ->select('
                         w.id
                        ,w.name
                        ,w.description
                        ,w.designation
                        ,w.variety
                        ,w.color
                        ,w.price
                        ,w.points AS grade
                        ,w.dateFabrication AS date
                        ,t.firstTaste AS first_taste
                        ,t.secondTaste AS second_taste
                        ,t.thirdTaste AS third_taste
                        ,c.name AS country
                        ,c.continent
                        ,p.longitude 
                        ,p.latitude
                      ')
                      ->where('w.id = :id')
                      ->setParameter('id', htmlentities($id))
                      ->innerJoin(WineProductor::class, 'wp', 'WITH', 'w.id = wp.idWine')
                      ->innerJoin(Productor::class, 'p', 'WITH', 'wp.idProductor = p.id AND p.latitude is not null')
                      ->innerJoin(Country::class, 'c', 'WITH', 'c.id = p.idCountry') 
                      ->innerJoin(TasteWine::class, 'tw', 'WITH', 'w.id = tw.idWine') 
                      ->innerJoin(Taste::class, 't', 'WITH', 't.id = tw.idTaste') 
                      ->setMaxResults(1)
                      ->getQuery()
                      ->getResult();
                      ;

        // Build response
        $response = new Response;

        if (count($wine) > 0) {

            $response->setContent(json_encode([
                'status' => 'success',
                'message' => 'OK',
                'wine' => $wine[0]
            ]));

            http_response_code(200);
            
        } else {

            $response->setContent(json_encode([
                'status'  => 'failed',
                'message' => 'Not found',
            ]));

            http_response_code(404);
            
        }

        $response->headers->set('Content-Type', 'application/json');
        $response->setCharset('charset=UTF-8');

        // Return response
        return $response;

    }

}
