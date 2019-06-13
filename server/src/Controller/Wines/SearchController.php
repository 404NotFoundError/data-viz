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
use App\Entity\Productor;
use App\Entity\Wine;

/**
 * SearchController
 */
class SearchController extends AbstractController
{

    /**
     * Search wine
     * 
     * @Route("/api/wines/search/{value}", methods={"GET"}, name="app_search_wines")
     * 
     * @param string $value The research value
     * @param Request $request
     * 
     * @return Response
     */
    public function searchWines(string $value, Request $request) : Response
    {

        // Get string 
        $wines = $this->getDoctrine()
                      ->getRepository(Wine::class)
                      ->createQueryBuilder('w')
                      ->select('
                         w.id
                        ,w.name
                        ,p.longitude 
                        ,p.latitude
                      ')
                      ->where('w.name LIKE :search')
                      ->orWhere('w.description LIKE :search')
                      ->setParameter('search', '%' . htmlentities($value) . '%')
                      ->innerJoin(WineProductor::class, 'wp', 'WITH', 'w.id = wp.idWine')
                      ->innerJoin(Productor::class, 'p', 'WITH', 'wp.idProductor = p.id AND p.latitude is not null')
                    //   ->setMaxResults(100)
                      ->orderBy('w.name', 'ASC')
                      ->getQuery()
                      ->getResult();
                      ;

        // Response
        $response = new Response;

        if (count($wines) > 0) {

            $response->setContent(json_encode([
                'status' => 'success',
                'message' => 'OK',
                'wines' => $wines
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
        return $response;

    }

}
