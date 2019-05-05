<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\MembersService;
use App\Http\Services\ResultsService;
use App\Http\Services\SantamaResultsService;
use App\Http\Services\TopImageService;

class MainController extends Controller
{
    public function index(TopImageService $topImageService)
    {
        $files = $topImageService->getFilesUrl();

        return view('pages.index', [
            'topImages' => $files,
        ]);
    }

    public function members(MembersService $membersService)
    {
        $members = $membersService->get();

        return view('pages.members', ['members' => $members]);
    }

    public function results(ResultsService $resultsService)
    {
        $results = $resultsService->getResults();
        return view('pages.results', [ 'results' => $results ]);
    }

    public function santama(SantamaResultsService $santamaResultsService)
    {
        $results = $santamaResultsService->get();

        return view('pages.santama', ['results' => $results]);
    }
}
