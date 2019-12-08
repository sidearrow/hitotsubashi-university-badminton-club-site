<?php

namespace App\Http\Controllers\Result;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LeagueDetailController extends Controller
{
    public function __invoke(Request $request)
    {
        $leagueId = $request->route('leagueId');

        $data = json_decode(
            file_get_contents(storage_path("app/files/league/{$leagueId}.json"))
        );

        return view('pages.result.league_detail', [
            'data' => $data,
        ]);
    }
}
