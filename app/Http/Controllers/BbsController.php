<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BbsPostRequest;
use App\Http\Requests\BbsPostEditRequest;
use App\Http\Requests\BbsPostAuthRequest;
use App\Http\Services\BbsPostsService;

class BbsController extends Controller
{
    public function index(Request $request, BbsPostsService $bbsPostsService)
    {
        $viewData = [
            'posts' => $bbsPostsService->getPosts(),
            'postsNum' => $bbsPostsService->getPostsNum(),
        ];

        return view('pages.bbs.index', $viewData);
    }

    public function create()
    {
        return view('pages.bbs.create');
    }

    public function createConfirm(BbsPostRequest $request)
    {
        $request->flash();

        return view('pages.bbs.create-confirm');
    }

    public function createCompleteGet()
    {
        return view('pages.bbs.create-complete');
    }

    public function createCompletePost(Request $request, BbsPostsService $bbsPostsService)
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

    public function show(Request $request, BbsPostsService $bbsPostsService, string $id)
    {
        return view('pages.bbs.show', [
            'id'       => $id,
            'post'     => $bbsPostsService->getPost($id),
            'comments' => $bbsPostsService->getComments($id),
        ]);
    }

    public function edit(Request $request, BbsPostsService $bbsPostsService, string $id)
    {
        $request->flash();

        return view('pages.bbs.edit', [
            'id'   => $id,
            'post' => $bbsPostsService->getPost($id),
        ]);
    }

    public function editConfirm(BbsPostEditRequest $request)
    {
        $request->flash();

        return view('pages.bbs.edit-confirm');
    }

    public function editCompletePost(BbsPostRequest $request, BbsPostsService $bbsPostsService, string $id)
    {
        if ($request->input('return') === '1') {
            return redirect('bbs/' . $id . '/edit');
        }
        if ($request->input('submit') !== '1') {
            return '404';
        }

        $bbsPostsService->updatePost(
            $id,
            $request->input('title'),
            $request->input('author'),
            $request->input('content'),
            $request->input('password')
        );

        return redirect('bbs/' . $id . '/edit-complete');
    }

    public function editCompleteGet(Request $request, string $id)
    {
        $viewData = [
            'id' => $id,
        ];

        return view('pages.bbs.edit-complete', $viewData);
    }

    public function delete(BbsPostAuthRequest $request, string $id)
    {
        return redirect('bbs');
    }
}
