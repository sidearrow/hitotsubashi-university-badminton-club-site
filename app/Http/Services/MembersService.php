<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class MembersService
{
    private $table;

    public function __construct()
    {
        $this->table = DB::table('members');
    }

    public function getMembers()
    {
        $res = $this->table
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
            ->get();
    }
}
