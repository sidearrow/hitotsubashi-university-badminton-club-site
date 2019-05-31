<?php

namespace App\Http\Controllers;

use App\Http\Services\MembersService;

class MembersController extends Controller
{
    public function __invoke(MembersService $membersService)
    {
        $members = $membersService->get();

        return view('pages.members', [
            'members' => $members,
        ]);
    }
}
