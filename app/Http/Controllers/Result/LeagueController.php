<?php

namespace App\Http\Controllers\Result;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = json_decode(file_get_contents(storage_path('app/files/league_results.json')), true);

        return view('pages.result.league', [
            'data' => $data,
        ]);
    }
}
