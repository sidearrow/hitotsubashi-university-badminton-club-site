<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class MizutoriLoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'password' => ['required', new MizutoriAuthRule],
        ];
    }

    public function attributes()
    {
        return [
            'password' => 'パスワード',
        ];
    }
}

class MizutoriAuthRule implements Rule
{
    public function passes($_, $value)
    {
        return Auth::guard('user')->attempt([
            'login_id' => 'mizutori',
            'password' => $value
        ]);
    }

    public function message()
    {
        return ':attributeが間違っています';
    }
}
