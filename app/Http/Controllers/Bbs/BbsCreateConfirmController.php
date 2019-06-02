<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Requests\BbsPostRequest;

class BbsCreateConfirmController
{
    public function __invoke(BbsPostRequest $bbsPostRequest)
    {
        return view('pages.bbs.create-confirm');
    }
}
