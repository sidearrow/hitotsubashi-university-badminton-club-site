<?php

namespace App\Http\Controllers\Result;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    public function __invoke(Request $request)
    {
        return view('pages.result.league');
    }
}
