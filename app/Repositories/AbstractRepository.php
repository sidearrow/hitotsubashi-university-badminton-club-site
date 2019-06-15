<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

abstract class AbstractRepository
{
    /**
     * @var \PDO
     */
    private $pdo;

    public function __construct(string $connection = null)
    {
        $this->pdo = DB::connection($connection)->getPdo();
    }

    protected function select(string $sql, array $bindArray = [])
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($bindArray);

        return $stmt->fetchAll(\PDO::FETCH_CLASS, get_class($this));
    }
}
