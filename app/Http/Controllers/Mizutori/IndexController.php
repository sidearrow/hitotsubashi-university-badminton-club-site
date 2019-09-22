<?php

namespace App\Http\Controllers\Mizutori;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        return view('pages.mizutori.index');
    }
}
