<?php

namespace App\Http\Controllers;

use App\Services\Actions\MembersService;

class MembersController extends Controller
{
    public function __invoke(MembersService $membersService)
    {
        return view('pages.members', [
            'viewData' => $membersService->getViewData(),
        ]);
    }
}
