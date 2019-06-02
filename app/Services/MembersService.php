<?php

namespace App\Services;

use App\Repositories\Members\MembersRepositorySelect;

class MembersService
{
    const NOW_YEAR = 2019;

    public function get()
    {
        $members = (new MembersRepositorySelect())(self::NOW_YEAR);

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
}
