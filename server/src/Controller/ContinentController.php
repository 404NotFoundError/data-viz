<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContinentController extends AbstractController
{

    /**
     * @Route("/api/continent/{slug}", name="continent")
     */
    public function continent(string $slug = null)
    {

        // If user not ask a specific slug
        if (is_null($slug)) {
            
            return $this->json([ $this->getParameter('continents') ]);

        // If user slack ask 
        } else {
            // If slug exist
            if ($this->getParameter('continents')[$slug]) {
               return $this->json([
                   'status' => 'OK',
                   'slug' => $slug,
                   'continent' => $this->getParameter('continents')[$slug]
               ]);
            // 
            } else {
                return new JsonResponse([
                    'status' => '',
                    'message' => 'Continent not found'
                ], 404);
            }
           
        }
        
    }


}
