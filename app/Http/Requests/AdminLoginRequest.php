<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class AdminLoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'password' => ['required', new AdminLoginRule()],
        ];
    }

    public function attributes()
    {
        return [
            'password' => 'パスワード',
        ];
    }
}

class AdminLoginRule implements Rule
{
    public function passes($_, $value)
    {
        return Auth::attempt([
            'login_id' => 'admin',
            'password' => $value,
        ]);
    }

    public function message()
    {
        return ':attributeが間違っています';
    }
}
