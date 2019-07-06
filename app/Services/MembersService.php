<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class MembersService
{
    private const NOW_YEAR = 2019;

    private $viewData;

    public function __construct()
    {
        $members = self::get(self::NOW_YEAR - 3, self::NOW_YEAR);

        $res = [
            ['grade' => '４', 'members' => []],
            ['grade' => '３', 'members' => []],
            ['grade' => '２', 'members' => []],
            ['grade' => '１', 'members' => []],
        ];

        foreach ($members as $v) {
            $res[3 - self::NOW_YEAR + $v->admission_year]['members'][] = [
                'fileUrl'    => $this->getFileUrl($v->file_name),
                'fullName'   => $v->last_name . ' ' . $v->first_name,
                'sx'         => $v->sx,
                'faculty'    => $v->faculty,
                'highschool' => $v->highschool . '（' . $v->highschool_prefecture . '）',
                'positions'  => $this->explodePosition($v->position),
                'comment'    => $v->comment,
            ];
        }

        $this->viewData = new \stdClass();
        $this->viewData->members = $res;
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private function explodePosition(string $str) :array
    {
        if ($str === '') {
            return [];
        }

        return explode(';', $str);
    }

    private function getFileUrl(string $fileName) :string
    {
        $assetPath = 'storage/members/' . $fileName;
        $filePath  = public_path() . '/' . $assetPath;

        if (file_exists($filePath)) {
            return asset($assetPath);
        }

        return asset('storage/members/in_preparation.png');
    }

    private static function get(int $yearFrom, int $yearTo)
    {
        return DB::table('members')
            ->select(
                'admission_year',
                'first_name',
                'last_name',
                'sx',
                'faculty',
                'highschool',
                'highschool_prefecture',
                'position',
                'file_name',
                'comment'
            )
            ->where('admission_year', '>=', $yearFrom)
            ->where('admission_year', '<=', $yearTo)
            ->orderBy('admission_year', 'asc')
            ->get();
    }
}
