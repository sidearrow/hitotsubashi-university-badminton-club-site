<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class MizutoriService
{
    private $viewData;

    public function __construct()
    {
        $obmsgs = [];
        foreach (self::getObmessages() as $v) {
            $obmsgs[$v->year][] = [
                'name'     => $v->name,
                'filename' => $v->filename,
                'url' => url('files/obmessages') . '/' . $v->filename,
            ];
        }

        $this->viewData = new \stdClass();
        $this->viewData->obmessages = $obmsgs;
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private static function getObmessages()
    {
        return DB::table('obmessages')
            ->select(
                'year',
                'month',
                'name',
                'filename',
            )
            ->orderBy('year', 'desc')
            ->orderBy('month', 'asc')
            ->get();
    }
}
