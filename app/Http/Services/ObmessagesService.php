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
                'month',
                'name',
                'filename',
            )
            ->orderBy('year', 'desc')
            ->orderBy('month', 'asc')
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

    public function getForAdmin()
    {
        $dbdata = DB::table('obmessages')
            ->select('year', 'month', 'name', 'filename')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();

        return $dbdata;
    }
}
