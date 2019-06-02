<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Requests\BbsPostEditRequest;

class BbsEditConfirmController
{
    public function __invoke(BbsPostEditRequest $request, string $id)
    {
        return view('pages.bbs.edit-confirm', [
            'id' => $id,
        ]);
    }
}
