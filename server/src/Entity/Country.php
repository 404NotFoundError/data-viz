<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Country
 *
 * @ORM\Table(name="country")
 * @ORM\Entity
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


}
