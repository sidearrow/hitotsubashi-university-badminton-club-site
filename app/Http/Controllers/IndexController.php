<?php

namespace App\Http\Controllers;

use App\Http\Services\TopImageService;

class IndexController extends Controller
{
    public function __invoke(TopImageService $topImageService)
    {
        $files = $topImageService->getFilesUrl();

        return view('pages.index', [
            'topImages' => $files,
        ]);
    }
}
