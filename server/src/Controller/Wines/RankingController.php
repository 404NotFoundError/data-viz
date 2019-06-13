<?php

namespace App\Controller\Wines;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManager;
use App\Entity\Country;
use App\Entity\Wine;

/**
 * Ranking Controller Class
 */
class RankingController extends AbstractController
{

    /**
     * The list of best wines per country
     * 
     * @Route("/api/best/wines/{country}", methods={"GET"}, name="app_best_wines")
     * 
     * @return Response
     */
    public function bestWines(string $country = null, Request $request) : Response
    {
        // Prepare response
        $response = new Response();

        // Get countries 
        $countries = json_decode(file_get_contents('http://' . $request->server->get('HTTP_HOST') . '/api/countries'), true);

        // Get connection
        $conn = $this->getDoctrine()->getManager()->getConnection();

        // For each countries
        foreach ($countries['countries'] as $key => $country) {

            // Build query
            $sql = '
                select 
                w.name,
                w.variety,
                w.color,
                w.points as note,
                c.name as country
                from wine_productor wp 
                inner join wine w ON w.id = wp.id_wine 
                inner join productor p ON p.id = wp.id_productor
                inner join country c ON c.id = p.id_country and c.name = :name
                order by w.points desc limit 3
            ';
            
            // Prepare and excecute
            $stmt = $conn->prepare($sql);
            $stmt->execute(['name' =>  $country['name']]);

            // Get result
            $result = $stmt->fetchAll();

            $results[$country['name']] = $result;
            
        }

        // Response
        $response->setContent(json_encode([
            'status'  => 'success',
            'message' => 'OK',
            'results' => $results
        ]));

        // Render response
        return $response;

    }

    /**
     * The list of best varieties per country
     * 
     * @Route("/api/varieties", methods={"GET"}, name="app_varieties")
     * 
     * @return Response
     */
    public function bestVariety(Request $request) : Response
    {

        $response = new Response();

        // Get connection
        $conn = $this->getDoctrine()->getManager()->getConnection();

        // Get distinct  countries
        $countries = json_decode(file_get_contents('http://' . $request->server->get('HTTP_HOST') . '/api/countries'), true);

        foreach ($countries['countries'] as $key => $country) {

            $sql = '
                select 
                count(w.variety) as count,
                w.variety
                from 
                wine_productor wp
                inner join wine w on w.id = wp.id_wine
                inner join productor p on p.id = wp.id_productor
                inner join country c on c.id = p.id_country and c.name = :name
                group by w.variety
            ';

            // Prepare and excecute
            $stmt = $conn->prepare($sql);
            $stmt->execute(['name' =>  $country['name']]);

            // Get result
            $result = $stmt->fetchAll();

            $results[$country['name']] = $result;
           
        }

        // Response
        $response->setContent(json_encode([
            'status'  => 'success',
            'message' => 'OK',
            'results' => $results
        ]));
        
        // Response render
        return $response;

    }

}
