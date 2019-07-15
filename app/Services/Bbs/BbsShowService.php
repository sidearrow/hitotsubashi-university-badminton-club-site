<?php

namespace App\Services\Bbs;

use Illuminate\Support\Facades\DB;

class BbsShowService
{
    private $viewData;

    public function __construct(string $postId)
    {
        $this->viewData = new \stdClass();

        $this->viewData->postId = $postId;
        $this->viewData->post = $this->getPost($postId);
        $this->viewData->comments = $this->getComments($postId);
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private function getPost(string $postId)
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

    private function getComments(string $parentId)
    {
        return DB::table('bbs_posts')
            ->select(
                'id',
                'author',
                'content',
                'created_at',
                'deleted_at'
            )
            ->where('parent_id', $parentId)
            ->get();
    }
}
