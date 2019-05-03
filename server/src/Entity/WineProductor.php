<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * WineProductor
 *
 * @ORM\Table(name="wine_productor", indexes={@ORM\Index(name="id_producteur", columns={"id_productor"}), @ORM\Index(name="id_vin", columns={"id_wine"})})
 * @ORM\Entity
 */
class WineProductor
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
     * @ORM\Column(name="id_wine", type="integer", nullable=false)
     */
    private $idWine;

    /**
     * @var int
     *
     * @ORM\Column(name="id_productor", type="integer", nullable=false)
     */
    private $idProductor;


}
