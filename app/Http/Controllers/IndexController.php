<?php

namespace App\Http\Controllers;

use App\Services\TopImageService;
use App\Views\Pages\IndexView;

class IndexController extends Controller
{
    public function __invoke(TopImageService $topImageService)
    {
        $files = $topImageService->getFilesUrl();

        (new IndexView())->draw($files);
        /*
        return view('pages.index', [
            'topImages' => $files,
        ]);
        */
    }
}
