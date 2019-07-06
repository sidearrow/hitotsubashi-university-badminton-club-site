<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bbs\BbsCreateRequest;
use App\Services\Actions\Bbs\BbsCreateService;
use App\Services\Actions\Bbs\BbsCreateConfirmService;
use App\Services\Actions\Bbs\BbsCreateCompleteService;

class CreateController extends Controller
{
    public function create()
    {
        $service = new BbsCreateService();

        return view('pages.bbs.create', [
            'viewData' => $service->getViewData(),
        ]);
    }

    public function confirm(BbsCreateRequest $request)
    {
        $service = new BbsCreateConfirmService($request);

        return view('pages.bbs.create-confirm', [
            'viewData' => $service->getViewData(),
        ]);
    }

    public function completeGet()
    {
        return view('pages.bbs.create-complete');
    }

    public function completePost(BbsCreateRequest $request)
    {
        new BbsCreateCompleteService($request);

        return redirect('bbs/create-complete');
    }
}
