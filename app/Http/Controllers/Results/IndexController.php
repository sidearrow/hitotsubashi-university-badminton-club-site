<?php

namespace App\Http\Controllers\Results;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('pages.results.index');
    }
}
