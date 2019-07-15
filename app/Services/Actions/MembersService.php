<?php

namespace App\Services\Actions;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use stdClass;

class MembersService
{
    private const NOW_YEAR = 2019;

    private $viewData;

    public function __construct()
    {
        $members = Cache::rememberForever('members', function () {
            $res = [];
            for ($i = 0; $i < 4; $i++) {
                $tmp = new stdClass();
                $tmp->grade   = 4 - $i;
                $tmp->members = [];
                
                $res[] = $tmp;
            }

            foreach ($this->getDataFromDB(self::NOW_YEAR - 3, self::NOW_YEAR) as $v) {
                $tmp = new \stdClass();
                $tmp->fileUrl    = $this->getFileUrl($v->file_name);
                $tmp->fullName   = $v->last_name . ' ' . $v->first_name;
                $tmp->gender     = $v->gender;
                $tmp->faculty    = $v->faculty;
                $tmp->highschool = $v->highschool . '（' . $v->highschool_prefecture . '）';
                $tmp->positions  = $this->explodePosition($v->position);
                $tmp->comment    = $v->comment;

                $res[3 - self::NOW_YEAR + $v->admission_year]->members[] = $tmp;
            }

            return $res;
        });

        $this->viewData = new \stdClass();
        $this->viewData->members = $members;
    }

    public function getViewData()
    {
        debug($this->viewData);
        return $this->viewData;
    }

    private function explodePosition(string $str): array
    {
        return $str === '' ? [] : explode(';', $str);
    }

    private function getFileUrl(string $fileName): string
    {
        $assetPath = 'images/members/' . $fileName;
        $filePath  = public_path($assetPath);

        if (file_exists($filePath)) {
            return asset($assetPath);
        }

        return asset('images/members/in_preparation.png');
    }

    private function getDataFromDB(int $yearFrom, int $yearTo)
    {
        return DB::table('members')
            ->select(
                'admission_year',
                'first_name',
                'last_name',
                'gender',
                'faculty',
                'highschool',
                'highschool_prefecture',
                'position',
                'file_name',
                'comment'
            )
            ->where('admission_year', '>=', $yearFrom)
            ->where('admission_year', '<=', $yearTo)
            ->where('delete_flg', '=', '0')
            ->orderBy('id', 'asc')
            ->get();
    }
}
