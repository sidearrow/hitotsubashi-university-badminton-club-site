<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\MizutoriLoginRequest;
use App\Services\MizutoriService;

class MizutoriController extends Controller
{
    public function index(MizutoriService $mizutoriService)
    {
        if (
            !Auth::guard('user')->check() ||
            Auth::guard('user')->user()->login_id !== 'mizutori'
        ) {
            return redirect('mizutori-login');
        }

        return view('pages.mizutori.index', [
            'viewData' => $mizutoriService->getViewData(),
        ]);
    }

    public function loginGet()
    {
        return view('pages.mizutori.login');
    }

    public function loginPost(MizutoriLoginRequest $request)
    {
        return redirect('mizutori');
    }
}
