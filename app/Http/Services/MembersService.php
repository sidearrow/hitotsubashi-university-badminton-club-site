<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class MembersService
{
    const NOW_YEAR = 2019;

    public function getMembers()
    {
        $members = DB::table('members')
            ->select(
                'admission_year',
                'first_name',
                'last_name',
                'faculty',
                'highschool',
                'position',
                'file_name',
                'comment'
            )
            ->where('admission_year', '>=', self::NOW_YEAR - 3)
            ->where('admission_year', '<=', self::NOW_YEAR)
            ->get();

        $res = [[],[],[],[]];
        foreach ($members as $v) {
            $res[self::NOW_YEAR - $v->admission_year][] = [
                'fileUrl'    => $this->getFileUrl($v->file_name),
                'fullName'   => $v->first_name . ' ' . $v->last_name,
                'faculty'    => $v->faculty,
                'highschool' => $v->highschool,
                'positions'  => $this->explodePosition($v->position),
                'comment'    => $v->comment,
            ];
        }
        
        return $res;
    }

    private function explodePosition(string $str) :array
    {
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
