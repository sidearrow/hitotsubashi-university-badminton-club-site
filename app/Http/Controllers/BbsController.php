<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BbsPostRequest;
use App\Http\Requests\BbsPostEditRequest;
use App\Http\Requests\BbsPostDeleteRequest;
use App\Http\Requests\BbsPostEditAuthRequest;
use App\Http\Requests\BbsPostCommentCreateRequest;
use App\Http\Services\BbsPostsService;

class BbsController extends Controller
{
    public function index(Request $request, BbsPostsService $bbsPostsService)
    {
        $page = (int)($request->page ?? '1');
        $year = $request->searchYear ?? '';
        $month = $request->searchMonth ?? '';

        $posts = $bbsPostsService->getPosts($page, $year, $month);
        $postsNum = $bbsPostsService->getPostsNum($year, $month);

        $pageLast = (int)(($postsNum + 19) / 20);
        $pageList = $this->createPageList($page, $pageLast);

        return view('pages.bbs.index', [
            'page'            => (string)$page,
            'pageList'        => $pageList,
            'urlWithoutPage'  => url()->current() . '?' . http_build_query(['searchYear' => $year, 'searchMonth' => $month]),
            'posts'           => $posts,
            'postsNum'        => $postsNum,
            'searchYearList'  => ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            'searchMonthList' => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            'searchYear'      => $year ?? '2012',
            'searchMonth'     => $month ?? '1',
        ]);
    }

    private function createPageList(int $page, int $pageLast) :array
    {
        if ($pageLast === 0) {
            return [0];
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
        if ($page >= $pageLast-1) {
            return [1, -1, $pageLast-2, $pageLast-1, $pageLast];
        }
        if ($page === $pageLast-2) {
            return [1, -1, $pageLast-3, $pageLast-2, $pageLast-1, $pageLast];
        }
        return [1, -1, $page-1, $page, $page+1, -1, $pageLast];
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

    public function edit(BbsPostEditAuthRequest $request, BbsPostsService $bbsPostsService, string $id)
    {
        return view('pages.bbs.edit', [
            'id'   => $id,
            'post' => $bbsPostsService->getPost($id),
        ]);
    }

    public function editConfirm(BbsPostEditRequest $request, string $id)
    {
        $request->flash();

        return view('pages.bbs.edit-confirm', [
            'id' => $id,
        ]);
    }

    public function editCompletePost(BbsPostRequest $request, BbsPostsService $bbsPostsService, string $id)
    {
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
        return view('pages.bbs.edit-complete', [
            'backUrl' => url('bbs/' . $id),
        ]);
    }

    public function delete(BbsPostDeleteRequest $request, BbsPostsService $bbsPostsService)
    {
        $bbsPostsService->deletePost($request->postId);

        if ($request->isComment === '1') {
            return redirect('bbs/' . $request->parentId)->with('isCommentDelete', '1');
        }

        return redirect('bbs');
    }

    public function commentCreate(
        BbsPostCommentCreateRequest $request,
        BbsPostsService $bbsPostsService,
        string $postId
    ) {
        $bbsPostsService->createComment(
            $postId,
            $request->author,
            $request->content,
            $request->password
        );

        return redirect('bbs/' . $postId);
    }
}
