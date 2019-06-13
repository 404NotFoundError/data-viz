<?php

namespace App\Controller\Productor;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Productor;
use App\Entity\Country;
use App\Entity\Wine;

class SingleProductorController extends AbstractController
{

    /**
     * @Route("/api/productor/{id}", name="app_single_productor", methods={"GET"})
     * @param int $id, The productor id
     */
    public function singleProductor(int $id, Request $request)
    {
        // Quety builder
        $query = $this->getDoctrine()->getRepository(Productor::class)->createQueryBuilder('p');

        // Get productor data
        $query->select('p.id, p.name, p.longitude, p.latitude, c.name as country')
              ->innerJoin(Country::class, 'c', 'WITH', 'c.id = p.idCountry')  
              ->groupBy('p.id')
              ->where('p.id = '. $id)
            ;

        // Get the productor
        $productor = $query->setMaxResults(1)->getQuery()->getResult();

        // Render response
        return new JsonResponse(['productor' => $productor[0]]);

    }

}
