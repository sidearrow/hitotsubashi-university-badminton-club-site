<?php

namespace App\Http\Controllers\Bbs;

use App\Services\BbsService;

class BbsDeleteController
{
    public function __invoke(BbsPostDeleteRequest $request, BbsService $bbsService)
    {
        $bbsService->deletePost($request->postId);

        if ($request->isComment === '1') {
            return redirect('bbs/' . $request->parentId)->with('isCommentDelete', '1');
        }

        return redirect('bbs');
    }
}
