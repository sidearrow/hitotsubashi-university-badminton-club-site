<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\MembersService;
use App\Http\Requests\AdminMembersImportRequest;

class AdminMembersController extends Controller
{
    public function index(Request $request, MembersService $membersService)
    {
        $members = $membersService->getForAdmin();

        return view('pages.admin.members', [
            'members' => $members,
        ]);
    }

    public function import(AdminMembersImportRequest $request, MembersService $membersService)
    {
        $membersService->import($request->fileData);

        return redirect('admin/members')->with('isDoneImport', '1');
    }
}
