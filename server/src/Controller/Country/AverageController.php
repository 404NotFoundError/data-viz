<?php

namespace App\Controller\Country;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManager;
use App\Entity\Country;
use App\Entity\Wine;

/**
 * Average Controller Class
 */
class AverageController extends AbstractController
{

    /**
     * The average wine rating by country
     * 
     * @Route("/api/average/{country}", methods={"GET"}, name="app_average")
     * 
     * @return Response
     */
    public function average(string $country = null) : Response
    {
        // Prepare response
        $response = new Response();

        // Get connection
        $conn = $this->getDoctrine()->getManager()->getConnection();

        // Build query
        $sql = '
            select 
            c.name as country, 
            AVG(w.points) as average
            from wine_productor wp 
            inner join wine w ON w.id = wp.id_wine 
            inner join productor p ON p.id = wp.id_productor
            inner join country c ON c.id = p.id_country
            group by c.name
        ';
        
        // Prepare and excecute query
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $result = $stmt->fetchAll();

        // Response
        $response->setContent(json_encode([
            'status' => 'success',
            'message' => 'OK',
            'results' => $result
        ]));

        // Render response
        return $response;

    }

}
