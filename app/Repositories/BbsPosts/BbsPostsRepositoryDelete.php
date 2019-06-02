<?php

namespace App\Repositories\BbsPosts;

class BbsPostsRepositoryDelete
{
    public function __invoke(string $id) :void
    {
        DB::table('bbs_posts')
            ->where('id', $id)
            ->update([
                'deleted_at' => Carbon::now(),
            ]);
    }
}
