<?php

namespace App\Services;

class TopImageService
{
    public function getFilesUrl() :array
    {
        $files = [];
        foreach (glob(storage_path('app/public/top') . '/*') as $file) {
            $files[] = asset('storage/top/' . basename($file));
        }

        return $files;
    }
}
