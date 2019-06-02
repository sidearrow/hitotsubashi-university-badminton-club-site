<?php

namespace App\Http\Controllers\Bbs;

class BbsCreateCompleteGetController
{
    public function __invoke()
    {
        return view('pages.bbs.create-confirm');
    }
}
