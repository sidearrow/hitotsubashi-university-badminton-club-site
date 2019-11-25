<?php

namespace App\Traits;

trait GetterTrait
{
    public function __get(string $propertyName)
    {
        return $this->$propertyName;
    }
}
