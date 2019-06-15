<?php

namespace App\Services;

use App\Repositories\BbsPosts\BbsPostsRepositorySelectPost;
use App\Repositories\BbsPosts\BbsPostsRepositorySelectPage;
use App\Repositories\BbsPosts\BbsPostsRepositorySelectCount;
use App\Repositories\BbsPosts\BbsPostsRepositorySelectComment;
use App\Repositories\BbsPosts\BbsPostsRepositoryDelete;
use App\Repositories\BbsPosts\BbsPostsRepositoryInsert;
use App\Repositories\BbsPosts\BbsPostsRepositoryUpdate;
use App\Http\Requests\BbsPostRequest;
use App\Http\Requests\BbsPostCommentCreateRequest;
use App\Http\Requests\BbsPostEditRequest;

class BbsService
{
    public function getPost(string $id)
    {
        return (new BbsPostsRepositorySelectPost())($id);
    }

    public function getComments(string $parentId)
    {
        return (new BbsPostsRepositorySelectComment())($parentId);
    }

    public function getPagePosts(int $pageNum, string $year, string $month)
    {
        $limit = 20;
        $offset = ($pageNum - 1) * $limit + 1;

        return (new BbsPostsRepositorySelectPage())($limit, $offset, $year . $month);
    }

    public function getPostsNum(string $year, string $month)
    {
        return (new BbsPostsRepositorySelectCount())($year, $month);
    }

    public function deletePost(string $id) :void
    {
        (new BbsPostsRepositoryDelete())($id);
    }

    public function createPost(BbsPostRequest $request) :void
    {
        $bbsPostsRepositoryInsert            = new BbsPostsRepositoryInsert();
        $bbsPostsRepositoryInsert->id        = uniqid();
        $bbsPostsRepositoryInsert->title     = $request->title;
        $bbsPostsRepositoryInsert->author    = $request->author;
        $bbsPostsRepositoryInsert->content   = $request->content;
        $bbsPostsRepositoryInsert->password  = bcrypt($request->password);
        $bbsPostsRepositoryInsert->createdAt = now();
        $bbsPostsRepositoryInsert->updatedAt = now();

        $bbsPostsRepositoryInsert();
    }

    public function createComment(BbsPostCommentCreateRequest $request, string $id) :void
    {
        $bbsPostsRepositoryInsert            = new BbsPostsRepositoryInsert();
        $bbsPostsRepositoryInsert->id        = uniqid();
        $bbsPostsRepositoryInsert->parentId  = $id;
        $bbsPostsRepositoryInsert->author    = $request->author;
        $bbsPostsRepositoryInsert->content   = $request->content;
        $bbsPostsRepositoryInsert->password  = bcrypt($request->password);
        $bbsPostsRepositoryInsert->createdAt = now();
        $bbsPostsRepositoryInsert->updatedAt = now();

        $bbsPostsRepositoryInsert();
    }

    public function updatePost(BbsPostEditRequest $request, string $id) :void
    {
        $bbsPostsRepositoryUpdate           = new BbsPostsRepositoryUpdate();
        $bbsPostsRepositoryUpdate->title    = $request->title;
        $bbsPostsRepositoryUpdate->author   = $request->author;
        $bbsPostsRepositoryUpdate->content  = $request->content;
        $bbsPostsRepositoryUpdate->password = bcrypt($request->password);

        $bbsPostsRepositoryUpdate();
    }

    public function createPageList(int $page, int $pageLast) :array
    {
        if ($pageLast === 0) {
            return [-1];
        }
        if ($pageLast <= 5) {
            return range(1, $pageLast);
        }
        if ($page <= 2) {
            return [1, 2, 3, -1, $pageLast];
        }
        if ($page === 3) {
            return [1, 2, 3, 4, -1, $pageLast];
        }
        if ($page >= $pageLast - 1) {
            return [1, -1, $pageLast - 2, $pageLast - 1, $pageLast];
        }
        if ($page === $pageLast - 2) {
            return [1, -1, $pageLast - 3, $pageLast - 2, $pageLast - 1, $pageLast];
        }

        return [1, -1, $page - 1, $page, $page + 1, -1, $pageLast];
    }
}
