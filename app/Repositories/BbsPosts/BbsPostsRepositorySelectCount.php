<?php

namespace App\Repositories\BbsPosts;

use Illuminate\Support\Facades\DB;

class BbsPostsRepositorySelectCount
{
    public function __invoke(string $year, string $month)
    {
        return DB::table('bbs_posts')
            ->when($year, function ($query, $year) {
                return $query->whereYear('created_at', $year);
            })
            ->when($month, function ($query, $month) {
                return $query->whereMonth('created_at', $month);
            })
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->count();
    }
}
