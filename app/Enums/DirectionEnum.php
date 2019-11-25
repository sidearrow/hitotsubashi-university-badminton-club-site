<?php

namespace App\Enums;

class DirectionEnum
{
    private const ASC = 'asc';
    private const DESC = 'desc';

    private $value;

    private static $instanceAsc;
    private static $instanceDesc;

    private function __construct(string $value)
    {
        $this->value = $value;
    }

    public function toString(): string
    {
        return $this->value;
    }

    public static function asc(): self
    {
        if (self::$instanceAsc === null) {
            self::$instanceAsc = new DirectionEnum(self::ASC);
        }
        return self::$instanceAsc;
    }

    public static function desc(): self
    {
        if (self::$instanceDesc === null) {
            self::$instanceDesc = new DirectionEnum(self::DESC);
        }
        return self::$instanceDesc;
    }
}
