<?php

namespace App\Services\Actions;

use Illuminate\Support\Facades\DB;

class IndexService
{
    private $viewData;

    public function __construct()
    {
        $this->viewData = new \stdClass();

        $this->viewData->topImages = $this->getTopImagesUrl();
        $this->viewData->introWording = $this->getIntroWording();
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private function getIntroWording() :string
    {
        return DB::table('mst_wording')
            ->select('value')
            ->where('wording_id', '=', 'W01001')
            ->first()
            ->value;
    }

    private function getTopImagesUrl() :array
    {
        $files = [];
        foreach (glob(storage_path('app/public/top') . '/*') as $file) {
            $files[] = asset('storage/top/' . basename($file));
        }

        return $files;
    }
}
