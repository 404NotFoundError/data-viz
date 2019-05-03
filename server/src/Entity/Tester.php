<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Tester
 *
 * @ORM\Table(name="tester")
 * @ORM\Entity
 */
class Tester
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
     * @ORM\Column(name="name", type="string", length=70, nullable=false)
     */
    private $name = '';

    /**
     * @var string|null
     *
     * @ORM\Column(name="twitter", type="string", length=80, nullable=true)
     */
    private $twitter;


}
