<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TasteWine
 *
 * @ORM\Table(name="taste_wine", indexes={@ORM\Index(name="id_vin", columns={"id_wine"}), @ORM\Index(name="id_arome", columns={"id_taste"})})
 * @ORM\Entity
 */
class TasteWine
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
     * @ORM\Column(name="id_taste", type="integer", nullable=false)
     */
    private $idTaste;

    /**
     * @var int
     *
     * @ORM\Column(name="id_wine", type="integer", nullable=false)
     */
    private $idWine;


}
