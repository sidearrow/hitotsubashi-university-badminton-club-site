<?php

namespace App\Repositories\BbsPosts;

use Illuminate\Support\Facades\DB;

class BbsPostsRepositorySelectPost
{
    public function __invoke(string $id)
    {
        return DB::table('bbs_posts')
            ->select('id', 'title', 'author', 'content', 'password', 'created_at')
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('id', $id)
            ->first();
    }
}
