<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bbs\BbsCreateRequest;
use App\Services\BbsService;

class CreatePostController extends Controller
{
    public function __invoke(BbsCreateRequest $request, BbsService $bbsService)
    {
        $bbsService->createPost(
            null,
            $request->getInputTitle(),
            $request->getInputAuthor(),
            $request->getInputContent(),
            $request->getInputPassword(),
        );

        return redirect('bbs/create-complete');
    }
}
