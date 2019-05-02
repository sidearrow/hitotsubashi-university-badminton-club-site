<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AdminLoginRequest;
use App\Http\Requests\ObmessagesCreateRequest;
use App\Http\Services\ObmessagesService;

class AdminIndexController extends Controller
{
    public function loginGet()
    {
        return view('pages.admin.login');
    }

    public function loginPost(AdminLoginRequest $request)
    {
        return redirect('admin');
    }

    public function index()
    {
        return view('pages.admin.index');
    }

    public function obmessages(Request $request, ObmessagesService $obmessagesService)
    {
        $obmessages = $obmessagesService->getForAdmin();
        $getUrl = function (string $fileName) {
            return url('files/obmessages/' . $fileName);
        };

        return view('pages.admin.obmessages', [
            'obmessages' => $obmessages,
            'getUrl'     => $getUrl,
        ]);
    }

    public function obmessagesCreate(ObmessagesCreateRequest $request)
    {}
}
