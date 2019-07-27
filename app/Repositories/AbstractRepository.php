<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

abstract class AbstractRepository
{
    protected function dbGet(string $sql, array $bindArray = [])
    {
        $dbData = DB::select($sql, $bindArray);

        $res = [];
        $class = get_class($this);
        foreach ($dbData as $row) {
            $res[] = $this->mapping($row, new $class());
        }

        return $res;
    }

    protected function dbGetFirst(string $sql, array $bindArray = [])
    {
        $dbData = DB::selectOne($sql, $bindArray);

        if ($dbData === null) {
            return null;
        }

        $class = get_class($this);

        return $this->mapping($dbData, new $class());
    }

    protected function dbGetCount(string $sql, array $bindArray = []): int
    {
        $dbData = DB::selectOne($sql, $bindArray);

        return (int) $dbData->count;
    }

    private function mapping(\stdClass $row, $target)
    {
        foreach (get_object_vars($row) as $k => $v) {
            $target->{$this->camelize($k)} = $v;
        }

        return $target;
    }

    private function camelize(string $str): string
    {
        $str = str_replace('_', '', ucwords($str, '_'));
        $str[0] = strtolower($str[0]);

        return $str;
    }
}
