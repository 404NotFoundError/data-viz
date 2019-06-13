<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CountryRepository")
 */
class Country
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
     * @ORM\Column(name="name", type="string", length=50, nullable=false)
     */
    private $name = '';

    /**
     * @var string
     *
     * @ORM\Column(name="province", type="string", length=50, nullable=false)
     */
    private $province;

    /**
     * @var string
     *
     * @ORM\Column(name="first_region", type="string", length=50, nullable=false)
     */
    private $firstRegion = '';

    /**
     * @var string|null
     *
     * @ORM\Column(name="second_region", type="string", length=50, nullable=true)
     */
    private $secondRegion;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $longitude;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $latitude;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $continent;

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(?string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(?string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getContinent(): ?string
    {
        return $this->continent;
    }

    public function setContinent(?string $continent): self
    {
        $this->continent = $continent;

        return $this;
    }

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

    public function getProvince(): ?string
    {
        return $this->province;
    }

    public function setProvince(string $province): self
    {
        $this->province = $province;

        return $this;
    }

    public function getFirstRegion(): ?string
    {
        return $this->firstRegion;
    }

    public function setFirstRegion(string $firstRegion): self
    {
        $this->firstRegion = $firstRegion;

        return $this;
    }

    public function getSecondRegion(): ?string
    {
        return $this->secondRegion;
    }

    public function setSecondRegion(?string $secondRegion): self
    {
        $this->secondRegion = $secondRegion;

        return $this;
    }


}
