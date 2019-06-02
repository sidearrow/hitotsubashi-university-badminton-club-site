<?php

namespace App\Http\Controllers\Bbs;

use App\Services\BbsService;
use App\Http\Requests\BbsPostCommentCreateRequest;

class BbsCommentCreateController
{
    public function __invoke(BbsPostCommentCreateRequest $request, BbsService $bbsService, string $postId)
    {
        $bbsService->createComment($request, $postId);

        return redirect('bbs/' . $postId);
    }
}
