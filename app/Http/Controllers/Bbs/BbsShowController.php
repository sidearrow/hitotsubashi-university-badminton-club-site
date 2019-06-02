<?php

namespace App\Http\Controllers\Bbs;

use App\Services\BbsService;

class BbsShowController
{
    public function __invoke(BbsService $bbsService, string $id)
    {
        return view('pages.bbs.show', [
            'id'       => $id,
            'post'     => $bbsService->getPost($id),
            'comments' => $bbsService->getComments($id),
        ]);
    }
}
