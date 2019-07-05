<?php

namespace App\Services;

class FormService
{
    /**
     * @var string|array $value
     */
    public $value;

    /**
     * @var boolean $isError
     */
    public $isError;

    /**
     * @var string $errorMessage
     */
    public $errorMessage;

    public function __construct($value, bool $isError = false, string $errorMessage = '')
    {
        $this->value = $value;
        $this->isError = $isError;
        $this->errorMessage = $errorMessage;
    }
}
