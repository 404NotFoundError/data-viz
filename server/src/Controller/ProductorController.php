<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProductorController extends AbstractController
{


    /**
     * @Route("/api/productors", name="productor")
     */
    public function productors()
    {
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/ProductorController.php',
        ]);

    }



}
