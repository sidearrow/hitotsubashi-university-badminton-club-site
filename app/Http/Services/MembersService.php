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
    public function import(array $data) {
        DB::transaction(function () use ($data) {
            DB::table('members')->truncate();
            DB::table('members')->insert($data);
        });
    }
}
