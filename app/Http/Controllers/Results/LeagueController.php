<?php

namespace App\Http\Controllers\Results;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LeagueController extends Controller
{
    public function __invoke()
    {
        $viewData = [
            'results' => self::getResultsData(),
        ];

        debug($viewData);

        return view('pages.results.league', $viewData);
    }

    private static function getResultsData()
    {
        $data = file_get_contents(storage_path('app/files/league_results.json'));
        $data = json_decode($data, true);

        return $data;
    }
}
