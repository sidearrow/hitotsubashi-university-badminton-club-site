<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class ObmessagesService
{
    public function get()
    {
        $dbdata = DB::table('obmessages')
            ->select(
                'year',
                'name',
                'filename',
            )
            ->orderBy('year', 'desc')
            ->orderBy('year_index', 'asc')
            ->get();

        $res = [];
        foreach ($dbdata as $v) {
            $res[$v->year][] = [
                'name'     => $v->name,
                'filename' => $v->filename,
            ];
        }
       
        return $res;
    }
}
