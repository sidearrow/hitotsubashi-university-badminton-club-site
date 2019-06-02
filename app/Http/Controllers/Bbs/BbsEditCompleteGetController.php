<?php

namespace App\Http\Controllers\Bbs;

class BbsEditCompleteGetController
{
    public function __invoke(string $id)
    {
        return view('pages.bbs.edit-complete', [
            'backUrl' => url('bbs/' . $id),
        ]);
    }
}
