<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bbs\BbsEditAuthRequest;
use App\Http\Requests\Bbs\BbsPostEditRequest;
use App\Services\Actions\Bbs\BbsEditService;
use App\Services\Actions\Bbs\BbsEditConfirmService;
use App\Services\Actions\Bbs\BbsEditCompleteService;

class EditController extends Controller
{
    public function index(BbsEditAuthRequest $request, string $postId)
    {
        $service = new BbsEditService($postId);

        return view('pages.bbs.edit', [
            'viewData' => $service->getViewData(),
        ]);
    }

    public function confirm(BbsPostEditRequest $request, string $postId)
    {
        $service = new BbsEditConfirmService($request, $postId);

        return view('pages.bbs.edit-confirm', [
            'viewData' => $service->getViewData(),
        ]);
    }

    public function completeGet(string $postId)
    {
        return view('pages.bbs.edit-complete', [
            'backUrl' => url('bbs/' . $postId),
        ]);
    }

    public function completePost(BbsPostEditRequest $request, string $postId)
    {
        new BbsEditCompleteService($request, $postId);

        return redirect('bbs/' . $postId . '/edit-complete');
    }
}
