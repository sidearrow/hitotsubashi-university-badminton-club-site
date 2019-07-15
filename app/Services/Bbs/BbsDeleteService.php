<?php

namespace App\Services\Bbs;

use Illuminate\Support\Facades\DB;

class BbsDeleteService
{
    public function __construct(string $postId)
    {
        self::delete($postId);
    }

    private static function delete(string $postId)
    {
        return DB::table('bbs_posts')
            ->where('id', $postId)
            ->update([
                'deleted_at' => now(),
            ]);
    }
}
