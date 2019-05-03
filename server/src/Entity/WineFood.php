<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * WineFood
 *
 * @ORM\Table(name="wine_food", indexes={@ORM\Index(name="id_vin", columns={"id_wine"}), @ORM\Index(name="id_mets", columns={"id_food"})})
 * @ORM\Entity
 */
class WineFood
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="id_food", type="integer", nullable=false)
     */
    private $idFood;

    /**
     * @var int
     *
     * @ORM\Column(name="id_wine", type="integer", nullable=false)
     */
    private $idWine;


}
