<?php

namespace App\Http\Controllers;

use App\Services\Actions\Results\IndexService;

class ResultsController extends Controller
{
    public function index(IndexService $service)
    {
        $viewData = $service->getViewData();

        return view('pages.results.index', ['viewData' => $viewData]);
    }

    public function detail(string $resultId)
    {
        $content = file_get_contents(storage_path('app/files/html/league-results/league-results-201901-m.html'));

        return view('pages.results.detail', [
            'content' => $content,
        ]);
    }
}
