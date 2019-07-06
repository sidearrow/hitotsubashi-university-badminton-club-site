<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Bbs\BbsIndexService;
use App\Services\Bbs\BbsShowService;
use App\Services\Bbs\BbsDeleteService;
use App\Http\Requests\BbsPostDeleteRequest;
use App\Http\Requests\BbsPostCommentCreateRequest;
use App\Services\Bbs\BbsCommentCreateService;

class BbsController extends Controller
{
    public function index(Request $request)
    {
        $service = new BbsIndexService($request);

        return view('pages.bbs.index', [
            'viewModel' => $service->getViewModel(),
        ]);
    }

    public function show(string $postId)
    {
        $service = new BbsShowService($postId);

        return view('pages.bbs.show', [
            'viewData' => $service->getViewData(),
        ]);
    }

    public function delete(BbsPostDeleteRequest $request, string $postId)
    {
        new BbsDeleteService($postId);

        if ($request->isComment === '1') {
            return redirect('bbs/' . $request->parentId)->with('isCommentDelete', '1');
        }

        return redirect('bbs');
    }

    public function commentCreate(BbsPostCommentCreateRequest $request, string $postId)
    {
        new BbsCommentCreateService($request, $postId);

        return redirect('bbs/' . $postId);
    }
}
