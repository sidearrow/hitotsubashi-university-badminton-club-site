<?php

namespace App\Http\Controllers\Bbs;

class BbsCreateCompletePostController
{
    public function __invoke(Request $request, BbsPostsService $bbsPostsService)
    {
        if ($request->input('return') === '1') {
            return redirect('bbs/create')->withInput();
        }

        $title = $request->input('title') ?: '';
        $author = $request->input('author') ?: '';
        $content = $request->input('content') ?: '';
        $password = $request->input('password') ?: '';
        $bbsPostsService->insertPost($title, $author, $content, $password);

        return redirect('bbs/create-complete');
    }
}
