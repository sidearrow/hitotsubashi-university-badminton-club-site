<?php

namespace App\Repositories\BbsPosts;

use Illuminate\Support\Facades\DB;

class BbsPostsRepositorySelectPage
{
    public function __invoke(int $pageNum = 1, int $length, string $year, string $month)
    {
        return DB::table('bbs_posts')
            ->select('id', 'title', 'author', 'created_at')
            ->when($year, function ($query, $year) {
                return $query->whereYear('created_at', $year);
            })
            ->when($month, function ($query, $month) {
                return $query->whereMonth('created_at', $month);
            })
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->orderBy('created_at', 'desc')
            ->offset(($pageNum - 1) * $length)
            ->limit($length)
            ->get();
    }
}
