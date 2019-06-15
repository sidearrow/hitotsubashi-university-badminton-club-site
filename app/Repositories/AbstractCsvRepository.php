<?php

namespace App\Repositories;

abstract class AbstractCsvRepository
{
    protected $file;

    public function __construct(string $filePath)
    {
        $this->file = new \SplFileObject($filePath);
        $this->file->setFlags(\SplFileObject::READ_CSV);
    }
}
