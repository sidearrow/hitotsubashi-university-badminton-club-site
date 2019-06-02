<?php

namespace App\Repositories\BbsPosts;

use Illuminate\Support\Facades\DB;

class BbsPostsRepositorySelectComment
{
    public function __invoke(string $parentId)
    {
        return DB::table('bbs_posts')
            ->select('id', 'author', 'content', 'created_at', 'deleted_at')
            ->where('parent_id', $parentId)
            ->get();
    }
}
