<?php

namespace App\Utils;

class DateUtil
{
    public static function format(string $value, string $format = 'Y/m/d h:i:s'): string
    {
        $timestamp = strtotime($value);

        return $timestamp === false ? '' : date($format);
    }
}
