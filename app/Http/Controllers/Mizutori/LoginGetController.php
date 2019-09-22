<?php

namespace App\Http\Controllers\Mizutori;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginGetController extends Controller
{
    public function __invoke(Request $request)
    {
        return view('pages.mizutori.login');
    }
}
