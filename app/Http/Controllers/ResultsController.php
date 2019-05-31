<?php

namespace App\Http\Controllers;

use App\Http\Services\ResultsService;

class ResultsController extends Controller
{
    public function __invoke(ResultsService $resultsService)
    {
        $results = $resultsService->getResults();
        return view('pages.results', [ 'results' => $results ]);
    }
}
