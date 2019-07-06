<?php

namespace App\Http\Requests\Bbs;

use Illuminate\Foundation\Http\FormRequest;

class BbsCreateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'author'   => 'required|max:100',
            'title'    => 'required|max:100',
            'content'  => 'required|max:2000',
            'password' => 'required|regex:/\d\d\d\d/',
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
            'author'   => '投稿者名',
            'title'    => 'タイトル',
            'content'  => '投稿内容',
            'password' => '編集/削除キー',
        ];
    }
}
