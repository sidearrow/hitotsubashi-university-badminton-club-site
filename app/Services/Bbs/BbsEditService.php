<?php

namespace App\Services\Bbs;

use Illuminate\Support\Facades\DB;

class BbsEditService
{
    private $viewData;

    public function __construct(string $postId)
    {
        $this->viewData = new \stdClass();

        $this->viewData->postId = $postId;
        $this->viewData->post = self::getPostData($postId);
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private static function getPostData(string $postId)
    {
        return DB::table('bbs_posts')
            ->select(
                'id',
                'title',
                'author',
                'content',
                'password',
                'created_at'
            )
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('id', $postId)
            ->first();
    }
}
