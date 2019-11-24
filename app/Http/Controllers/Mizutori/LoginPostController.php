<?php

namespace App\Http\Controllers\Mizutori;

use App\Http\Controllers\Controller;
use App\Services\AuthMizutoriService;
use Illuminate\Http\Request;

class LoginPostController extends Controller
{
    public function __invoke(Request $request, AuthMizutoriService $authMizutoriService)
    {
        $request->validate([
            'password' => [
                'required',
                function (string $attribute, string $value, $fail) use ($authMizutoriService) {
                    if (!$authMizutoriService->login($value)) {
                        $fail('パスワードが間違っています');
                    }
                },
            ]
        ]);

        return redirect('mizutori');
    }
}
