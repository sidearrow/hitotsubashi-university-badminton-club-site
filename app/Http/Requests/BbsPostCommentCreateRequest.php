<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property string $author
 * @property string $content
 * @property string $password
 */
class BbsPostCommentCreateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'author'   => ['required', 'max:100'],
            'content'  => ['required', 'max:500'],
            'password' => ['required', 'regex:/\d\d\d\d/'],
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
            'content'  => '投稿内容',
            'password' => '削除キー',
        ];
    }
}
