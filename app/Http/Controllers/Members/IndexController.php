<?php

namespace App\Http\Controllers\Members;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $viewData = [
            'membersData' => self::getMembersData(),
        ];

        return view('pages.members.index', $viewData);
    }

    private static function getMembersData(): array
    {
        $data = file_get_contents(storage_path('app/files/members.json'));
        $data = json_decode($data, true);

        return $data;
    }
}
