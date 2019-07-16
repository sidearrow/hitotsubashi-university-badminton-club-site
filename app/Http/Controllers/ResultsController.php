<?php

namespace App\Http\Controllers;

use App\Services\Actions\Results\IndexService;
use App\Services\Actions\Results\DetailService;

class ResultsController extends Controller
{
    public function index(IndexService $service)
    {
        $viewData = $service->getViewData();

        return view('pages.results.index', ['viewData' => $viewData]);
    }

    public function detail(string $resultId)
    {
        $service = new DetailService($resultId);

        if ($service->isNotFound()) {
            return abort(404);
        }
        debug($service->getViewData());

        return view('pages.results.detail', [
            'viewData' => $service->getViewData(),
        ]);
    }
}
