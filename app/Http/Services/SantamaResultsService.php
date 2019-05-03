<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class SantamaResultsService
{
    public function get()
    {
        $dbdata = DB::table('santama_results')
            ->select('year', 'name', 'file_name')
            ->get();

        $res = [];
        foreach ($dbdata as $v) {
            $res[$v->year][] = [
                'name' => $v->name,
                'url'  => asset('storage/santama_results/' . $v->file_name),
            ];
        }

        return $res;
    }
}
