<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Wine
 *
 * @ORM\Table(name="wine", indexes={@ORM\Index(name="id_testeur", columns={"id_testeur"})})
 * @ORM\Entity
 */
class Wine
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=200, nullable=false)
     */
    private $name = '';

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=0, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="designation", type="string", length=150, nullable=false)
     */
    private $designation;

    /**
     * @var string
     *
     * @ORM\Column(name="variety", type="string", length=50, nullable=false)
     */
    private $variety = '';

    /**
     * @var string
     *
     * @ORM\Column(name="color", type="string", length=45, nullable=false)
     */
    private $color = '';

    /**
     * @var string|null
     *
     * @ORM\Column(name="price", type="string", length=45, nullable=true)
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(name="points", type="string", length=45, nullable=false)
     */
    private $points;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="date_fabrication", type="date", nullable=true)
     */
    private $dateFabrication;

    /**
     * @var int|null
     *
     * @ORM\Column(name="id_testeur", type="integer", nullable=true)
     */
    private $idTesteur;

    /**
     * @var int
     *
     * @ORM\Column(name="id_producteur", type="integer", nullable=false)
     */
    private $idProducteur;


}
