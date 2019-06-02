<?php

namespace App\Http\Controllers\Bbs;

use App\Services\BbsService;
use App\Http\Requests\BbsPostEditAuthRequest;

class BbsEditController
{
    public function __invoke(BbsPostEditAuthRequest $request, BbsService $bbsService, string $id)
    {
        return view('pages.bbs.edit', [
            'id'   => $id,
            'post' => $bbsService->getPost($id),
        ]);
    }
}
