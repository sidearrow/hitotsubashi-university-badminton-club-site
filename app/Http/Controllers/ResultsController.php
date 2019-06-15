<?php

namespace App\Http\Controllers;

use App\Services\ResultsService;

class ResultsController extends Controller
{
    public function __invoke(ResultsService $resultsService)
    {
        $viewData = $resultsService->getViewData();

        return view('pages.results', ['viewData' => $viewData]);
    }
}
