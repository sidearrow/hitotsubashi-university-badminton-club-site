<?php

namespace App\Http\Controllers;

use App\Http\Services\SantamaResultsService;

class SantamaController extends Controller
{
    public function __invoke(SantamaResultsService $santamaResultsService)
    {
        $results = $santamaResultsService->get();

        return view('pages.santama', [
            'results' => $results,
        ]);
    }
}
