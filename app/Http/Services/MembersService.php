<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class MembersService
{
    const NOW_YEAR = 2019;

    public function get()
    {
        $members = DB::table('members')
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
            ->where('admission_year', '>=', self::NOW_YEAR - 3)
            ->where('admission_year', '<=', self::NOW_YEAR)
            ->orderBy('admission_year', 'asc')
            ->get();

        $res = [
            ['grade' => '４', 'members' => []],
            ['grade' => '３', 'members' => []],
            ['grade' => '２', 'members' => []],
            ['grade' => '１', 'members' => []],
        ];

        foreach ($members as $v) {
            $res[4 - self::NOW_YEAR + $v->admission_year]['members'][] = [
                'fileUrl'    => $this->getFileUrl($v->file_name),
                'fullName'   => $v->last_name . ' ' . $v->first_name,
                'sx'         => $v->sx,
                'faculty'    => $v->faculty,
                'highschool' => $v->highschool . '（' . $v->highschool_prefecture . '）',
                'positions'  => $this->explodePosition($v->position),
                'comment'    => $v->comment,
            ];
        }
        
        return $res;
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
        $filePath = public_path() . '/' . $assetPath;

        if (file_exists($filePath)) {
            return asset($assetPath);
        }
        return asset('storage/members/in_preparation.png');
    }

    public function getForAdmin()
    {
        $dbdata = DB::table('members')
            ->select(
                'id', 'admission_year', 'first_name', 'last_name', 'sx', 'faculty',
                'highschool', 'highschool_prefecture', 'position', 'file_name', 'comment'
            )
            ->orderBy('admission_year', 'asc')
            ->get();

        return $dbdata;
    }

    public function insert(
        string $admissionYear,
        string $firstName,
        string $lastName,
        string $faculty,
        string $highschool,
        string $position,
        string $comment
    ) {
        DB::table('members')->insert([
            'admission_year' => $admissionYear,
            'first_name'     => $firstName,
            'last_name'      => $lastName,
            'faculty'        => $faculty,
            'highschool'     => $highschool,
            'position'       => $position,
            'comment'        => $comment,
        ]);
    }
}
