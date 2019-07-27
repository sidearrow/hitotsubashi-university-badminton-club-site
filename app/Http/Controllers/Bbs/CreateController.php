<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bbs\BbsCreateRequest;
use App\Services\Actions\Bbs\BbsCreateCompleteService;

class CreateController extends Controller
{
    public function input()
    {
        return view('pages.bbs.create');
    }

    public function confirm()
    {
        return view('pages.bbs.create-confirm');
    }

    public function complete()
    {
        return view('pages.bbs.create-complete');
    }

    public function create(BbsCreateRequest $request)
    {
        if ($request->isConfirm === '1') {
            return redirect('bbs/create-confirm')->withInput();
        }

        new BbsCreateCompleteService($request);

        return redirect('bbs/create-complete');
    }
}
