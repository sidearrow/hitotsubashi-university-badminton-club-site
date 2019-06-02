<?php

namespace App\Repositories\Members;

use App\Repositories\AbstractRepository;

class MembersRepositorySelect extends AbstractRepository
{
    public function __invoke(int $year)
    {
        return $this->db::table('members')
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
            ->where('admission_year', '>=', $year - 3)
            ->where('admission_year', '<=', $year)
            ->orderBy('admission_year', 'asc')
            ->get();
    }
}
