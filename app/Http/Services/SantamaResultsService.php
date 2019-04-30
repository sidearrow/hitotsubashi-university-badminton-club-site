<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class SantamaResultsService
{
    public function get()
    {
        $results = DB::table('santama_results')
            ->select('year', 'name', 'filename')
            ->get();

        $res = [];
        foreach ($results as $v) {
            $res[$v->year][] = [
                'name'     => $v->name,
                'filename' => $v->filename,
            ];
        }

        return $res;
    }
}
