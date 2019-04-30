<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", methods={"GET"}, name="search")
     */
    public function search()
    {
        return $this->render('search.html.twig', []);
    }
    
}
