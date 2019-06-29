<?php

namespace App\Services;

use App\Repositories\BbsPosts\BbsPostsRepositorySelectPost;
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

    public function deletePost(string $id) :void
    {
        (new BbsPostsRepositoryDelete())($id);
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
}
