<?php

namespace App\Http\Controllers;

use App\Services\Actions\SantamaService;

class SantamaController extends Controller
{
    public function __invoke(SantamaService $santamaService)
    {
        return view('pages.santama', [
            'viewData' => $santamaService->getViewData(),
        ]);
    }
}
