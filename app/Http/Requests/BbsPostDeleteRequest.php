<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\BbsPostsAuthRule;

class BbsPostDeleteRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->request->get('postId');
        return [
            'deletePassword' => ['required', 'regex:/\d\d\d\d/', new BbsPostsAuthRule($id)]
        ];
    }

    public function messages()
    {
        return [
            '*.regex' => ':attributeは半角数字4字で入力してください'
        ];
    }

    public function attributes()
    {
        return [
            'deletePassword' => '削除キー',
        ];
    }
}
