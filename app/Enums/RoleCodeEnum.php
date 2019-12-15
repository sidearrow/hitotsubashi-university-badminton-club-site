<?php

namespace App\Enums;

class RoleCodeEnum
{
    private const MIZUTORI = 1;

    private $value;

    private function __construct(int $value)
    {
        $this->value = $value;
    }

    public function getValue(): int
    {
        return $this->value;
    }

    public static function mizutori(): self
    {
        return new self(self::MIZUTORI);
    }
}
