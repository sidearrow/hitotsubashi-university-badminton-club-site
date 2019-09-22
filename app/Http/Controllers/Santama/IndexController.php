<?php

namespace App\Http\Controllers\Santama;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        $viewData = [
            'results' => self::getResultsData(),
        ];

        return view('pages.santama.index', $viewData);
    }

    private static function getResultsData(): array
    {
        $data = file_get_contents(storage_path('app/files/santama_results.json'));
        $data = json_decode($data, true);

        return $data;
    }
}
