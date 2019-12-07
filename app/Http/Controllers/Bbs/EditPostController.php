<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditPostController extends Controller
{
    public function __invoke()
    {
        return view('pages.bbs.create');
    }
}
