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
     * @var int|null
     *
     * @ORM\Column(name="date_fabrication", type="integer", nullable=true)
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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getVariety(): ?string
    {
        return $this->variety;
    }

    public function setVariety(string $variety): self
    {
        $this->variety = $variety;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(?string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPoints(): ?string
    {
        return $this->points;
    }

    public function setPoints(string $points): self
    {
        $this->points = $points;

        return $this;
    }

    public function getDateFabrication(): ?\DateTimeInterface
    {
        return $this->dateFabrication;
    }

    public function setDateFabrication(?\DateTimeInterface $dateFabrication): self
    {
        $this->dateFabrication = $dateFabrication;

        return $this;
    }

    public function getIdTesteur(): ?int
    {
        return $this->idTesteur;
    }

    public function setIdTesteur(?int $idTesteur): self
    {
        $this->idTesteur = $idTesteur;

        return $this;
    }

    public function getIdProducteur(): ?int
    {
        return $this->idProducteur;
    }

    public function setIdProducteur(int $idProducteur): self
    {
        $this->idProducteur = $idProducteur;

        return $this;
    }


}
