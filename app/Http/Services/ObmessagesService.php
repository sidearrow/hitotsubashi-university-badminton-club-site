<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

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
            ->select('id', 'year', 'month', 'name', 'filename')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();

        return $dbdata;
    }

    public function insert(
        string $year,
        string $month,
        string $name,
        string $filename
    ) {
        DB::table('obmessages')->insert([
            'year'     => $year,
            'month'    => $month,
            'name'     => $name,
            'filename' => $filename,
        ]);
    }

    public function getFileNameById(string $id)
    {
        $dbData = DB::table('obmessages')->find($id);

        if ($dbData === null) {
            return null;
        }
        return $dbData->filename;
    }

    public function delete(string $id)
    {
        DB::table('obmessages')->delete($id);
    }

    public function createFileName(string $year, string $month)
    {
        return 'obmessage_' . $year . sprintf('%02d', $month) . '.pdf';
    }
}
