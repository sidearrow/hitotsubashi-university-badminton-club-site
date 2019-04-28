<?php

namespace App\Http\Controllers\BbsPostAuth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest:bbsPost')->except('logout');
    }

    protected function guard()
    {
        return Auth::guard('bbsPost');
    }

    public function username()
    {
        return 'uuid';
    }

    public function editLogin(Request $request, string $id)
    {
        $isAuth = Auth::guard('bbsPost')->attempt([
                'uuid' => $request->input('postId'),
                'password' => $request->input('editPassword'),
            ]);

        if (!$isAuth) {
            Auth::guard('bbsPost')->logout();
            return redirect()->action('BbsController@show', $id);
        }

        return redirect()->action('BbsController@edit', $id);
    }
}
