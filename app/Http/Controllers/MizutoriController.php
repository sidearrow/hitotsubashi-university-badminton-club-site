<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\MizutoriLoginRequest;
use App\Http\Services\ObmessagesService;

class MizutoriController extends Controller
{
    public function index(ObmessagesService $obmessagesService)
    {
        if (
            !Auth::guard('user')->check() ||
            Auth::guard('user')->user()->login_id !== 'mizutori'
        ) {
            return redirect('mizutori-login');
        }

        $obmessages = $obmessagesService->get();
        $getObmessasgesUrl = function (string $fileName) {
            return url('files/obmessages') . '/' . $fileName;
        };

        return view('pages.mizutori', [
            'obmessags' => $obmessages,
            'getObmessagesUrl' => $getObmessasgesUrl
        ]);
    }

    public function loginGet()
    {
        return view('pages.mizutori-login');
    }

    public function loginPost(MizutoriLoginRequest $request)
    {
        return redirect('mizutori');
    }
}
