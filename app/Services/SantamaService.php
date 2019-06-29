<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class SantamaService
{
    private $viewData;

    public function __construct()
    {
        $dbdata = DB::table('santama_results')
            ->select(
                'year',
                'name',
                'file_name'
                )
            ->get();

        $this->viewData = new \stdClass();

        $this->viewData->results = [];
        foreach ($dbdata as $v) {
            $this->viewData->results[$v->year][] = [
                'name' => $v->name,
                'url'  => asset('storage/santama_results/' . $v->file_name),
            ];
        }
    }

    public function getViewData()
    {
        return $this->viewData;
    }
}
