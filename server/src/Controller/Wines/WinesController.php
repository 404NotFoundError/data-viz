<?php

namespace App\Controller\Wines;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
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
 * Wines Controller Class
 */
class WinesController extends AbstractController
{
    
    /**
     * Get a list of wines
     * 
     * @Route("/api/wines", methods={"GET"}, name="app_static_wines")
     * 
     * @param Request $request
     * 
     * @return Response
     */
    public function staticWines(Request $request) : Response
    {

        set_time_limit(0);       

        // Debut of query builder
        $query = $this->getDoctrine()
                      ->getRepository(WineProductor::class)
                      ->createQueryBuilder('wp')
                      ->select('DISTINCT wp.idWine');

        // Get distinct ids
        $winesIds = $query->getQuery()->getResult();

        // Get wines with data
        foreach ($winesIds as $key => $item) {

            $wine = $this->getDoctrine()
                         ->getRepository(WineProductor::class)
                         ->createQueryBuilder('wp')
                         ->select(
                            'wp.idWine as id'
                            ,'w.name'
                            ,'w.color'
                            ,'w.description'
                            ,'w.designation'
                            ,'w.price'
                            ,'w.points as grade'
                            ,'w.dateFabrication as date'
                            ,'t.firstTaste AS first_taste'
                            ,'t.secondTaste AS second_taste'
                            ,'t.thirdTaste AS third_taste'
                            ,'c.name as country'
                            ,'c.continent'
                            ,'p.longitude'
                            ,'p.latitude' 
                         ) 
                         ->where('wp.idWine = :idValue')
                         ->setParameter('idValue', $item['idWine'])
                         ->innerJoin(Wine::class, 'w', 'WITH', 'wp.idWine = w.id')
                         ->innerJoin(Productor::class, 'p', 'WITH', 'wp.idProductor = p.id AND p.latitude is not null')
                         ->innerJoin(Country::class, 'c', 'WITH', 'c.id = p.idCountry') 
                         ->innerJoin(TasteWine::class, 'tw', 'WITH', 'w.id = tw.idWine') 
                         ->innerJoin(Taste::class, 't', 'WITH', 't.id = tw.idTaste') 
                         ->setMaxResults(1)
                         ->getQuery()
                         ->getResult();

            // Insert wine in list
            if (isset($wine[0])) {
                $wines[] = $wine[0];
            }
        
        }

        // Response 
        $response = new Response;

        // Content
        $response->setContent(json_encode([
            'status' => 'success',
            'message' => 'OK',
            'wines' => $wines
        ]));
        
        $response->headers->set('Content-Type', 'application/json');

        $response->setCharset('charset=UTF-8');

        // Response cache
        $response->setCache([
            'etag'          => 'all_wines',
            'last_modified' => new \DateTime(),
            'max_age'       => 3600 * 24,
            's_maxage'      => 3600 * 24,
            'private'       => false,
            'public'        => true,
        ]);

        $response->setStatusCode(Response::HTTP_OK);

        // Return response
        return $response;

    }



}
