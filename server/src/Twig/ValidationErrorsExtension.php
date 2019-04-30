<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Manage of validation erros
 */
class ValidationErrorsExtension extends AbstractExtension
{

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getInputError', [$this, 'doSomething']),
        ];
    }

    /**
     * @param array $erros List of errors
     * @param string $filed The error field
     */
    public function doSomething($errors, string $field)
    {
        if (count($errors) > 0) {
            foreach ($errors as $key => $error) {
                if ($error->getPropertyPath() === $field) { return $error->getMessage(); }
            }
            return '';
        } else {
            return '';
        }
    }

}
