<?php

namespace App\Http\Controllers;

use App\Services\Actions\IndexService;

class IndexController extends Controller
{
    public function __invoke(IndexService $service)
    {
        return view('pages.index', [
            'viewData' => $service->getViewData(),
        ]);
    }
}
