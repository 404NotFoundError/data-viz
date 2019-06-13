<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Taste
 *
 * @ORM\Table(name="taste")
 * @ORM\Entity
 */
class Taste
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
     * @var string|null
     *
     * @ORM\Column(name="first_taste", type="string", length=50, nullable=true)
     */
    private $firstTaste;

    /**
     * @var string|null
     *
     * @ORM\Column(name="second_taste", type="string", length=50, nullable=true)
     */
    private $secondTaste;

    /**
     * @var string|null
     *
     * @ORM\Column(name="third_taste", type="string", length=50, nullable=true)
     */
    private $thirdTaste;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstTaste(): ?string
    {
        return $this->firstTaste;
    }

    public function setFirstTaste(?string $firstTaste): self
    {
        $this->firstTaste = $firstTaste;

        return $this;
    }

    public function getSecondTaste(): ?string
    {
        return $this->secondTaste;
    }

    public function setSecondTaste(?string $secondTaste): self
    {
        $this->secondTaste = $secondTaste;

        return $this;
    }

    public function getThirdTaste(): ?string
    {
        return $this->thirdTaste;
    }

    public function setThirdTaste(?string $thirdTaste): self
    {
        $this->thirdTaste = $thirdTaste;

        return $this;
    }


}
