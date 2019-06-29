<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Bbs\BbsIndexService;
use App\Http\Requests\BbsPostRequest;
use App\Services\Bbs\BbsCreateCompleteService;

class BbsController extends Controller
{
    public function index(Request $request)
    {
        $service = new BbsIndexService($request);

        return view('pages.bbs.index', [
            'viewModel' => $service->getViewModel(),
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
}
