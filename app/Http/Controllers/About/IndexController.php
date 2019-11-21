<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        $constPageAbout = config('const_page_about');

        return view('pages.about', [
            'position'     => $constPageAbout['position'],
            'practiceTime' => $constPageAbout['practiceTime'],
        ]);
    }
}
