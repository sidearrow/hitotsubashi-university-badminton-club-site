<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

abstract class AbstractRepository
{
    /**
     * @var \Illuminate\Support\Facades\DB $db
     */
    protected $db;

    public function __construct()
    {
        $this->db = DB::class;
    }
}
