<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\MembersService;

class AdminMembersController extends Controller
{
    public function index(Request $request, MembersService $membersService)
    {
        $members = $membersService->getForAdmin();

        return view('pages.admin.members', [
            'members' => $members,
        ]);
    }

    public function create(Request $request, MembersService $membersService)
    {
        $membersService->insert(
            $request->admissionYear,
            $request->firstName,
            $request->lastName,
            $request->faculty,
            $request->highschool,
            $request->position,
            $request->comment
        );

        return redirect('admin/members')->with('isDoneCreate', '1');
    }
}
