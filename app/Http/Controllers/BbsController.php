<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BbsPostRequest;
use App\Http\Requests\BbsPostEditAuthRequest;
use App\Services\Bbs\BbsIndexService;
use App\Services\Bbs\BbsCreateCompleteService;
use App\Services\Bbs\BbsEditService;
use App\Services\Bbs\BbsShowService;
use App\Http\Requests\BbsPostEditRequest;
use App\Services\Bbs\BbsEditCompleteService;
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

    public function create()
    {
        return view('pages.bbs.create');
    }

    public function createConfirm(BbsPostRequest $request)
    {
        return view('pages.bbs.create-confirm');
    }

    public function createCompleteGet()
    {
        return view('pages.bbs.create-confirm');
    }

    public function createCompletePost(BbsPostRequest $request)
    {
        new BbsCreateCompleteService($request);

        return redirect('bbs/create-complete');
    }

    public function edit(BbsPostEditAuthRequest $request, string $id)
    {
        $service = new BbsEditService($id);

        return view('pages.bbs.edit', [
            'viewData' => $service->getViewData(),
        ]);
    }

    public function editConfirm(BbsPostEditRequest $request, string $postId)
    {
        return view('pages.bbs.edit-confirm', [
            'id' => $postId,
        ]);
    }

    public function editCompleteGet(string $postId)
    {
        return view('pages.bbs.edit-complete', [
            'backUrl' => url('bbs/' . $postId),
        ]);
    }

    public function editCompletePost(BbsPostEditRequest $request, string $postId)
    {
        new BbsEditCompleteService($request, $postId);

        return redirect('bbs/' . $postId . '/edit-complete');
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
