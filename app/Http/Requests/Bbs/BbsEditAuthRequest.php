<?php

namespace App\Http\Requests\Bbs;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Rules\BbsPostsAuthRule;

class BbsEditAuthRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $postId = $this->route('postId');

        $authGuardBbsPost = Auth::guard('bbsPost');
        if ($authGuardBbsPost->check() && $authGuardBbsPost->user()->id === $postId) {
            return [];
        }

        return [
            'postId'       => 'required',
            'editPassword' => ['required', 'regex:/\d\d\d\d/', new BbsPostsAuthRule($postId)],
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
            'editPassword'   => '編集キー',
        ];
    }
}
