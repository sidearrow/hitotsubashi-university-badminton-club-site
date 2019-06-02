<?php

namespace App\Http\Controllers\Bbs;

use App\Services\BbsService;
use App\Http\Requests\BbsPostEditRequest;

class BbsEditCompletePostController
{
    public function __invoke(BbsPostEditRequest $request, BbsService $bbsService, string $id)
    {
        $bbsService->updatePost($request, $id);

        return redirect('bbs/' . $id . '/edit-complete');
    }
}
