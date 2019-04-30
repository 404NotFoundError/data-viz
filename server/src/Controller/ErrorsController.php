<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ErrorsController extends AbstractController
{
    /**
     * @Route("/404", methods={"GET"}, name="notFound")
     */
    public function notFound()
    {
        return $this->render('errors/not-found.html.twig', []);
    }

}
