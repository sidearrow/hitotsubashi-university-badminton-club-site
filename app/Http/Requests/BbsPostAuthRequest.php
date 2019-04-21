<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class BbsPostAuthRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'password' => ['required|regex:/\d\d\d\d/', new PostAuthRule],
        ];
    }

    public function messages()
    {
        return [
            'password.regex' => ':attributeは半角数字4字で入力してください'
        ];
    }

    public function attributes()
    {
        return [
            'password' => '編集キー',
        ];
    }
}

class PostAuthRule implements Rule
{
    public function passes($attribute, $value)
    {
        $passwordHash = DB::table('bbs_posts')
            ->select('password')
            ->where('uuid', $this->route('id'))
            ->first()
            ->password;
        
        return Hash::check($value, $passwordHash);
    }

    public function message()
    {
        return ':attributeが間違っています';
    }
}
