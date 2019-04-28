<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
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
        if (Session::has('_old_input.postId')) {
            $this->request->set('postId', Session::get('_old_input.postId'));
        }
        $postId = $this->request->get('postId');

        if (Session::has('_old_input.editPassword')) {
            $this->request->set('editPassword', Session::get('_old_input.editPassword'));
        }
        dd($this->request->get('postId'));

        if ($this->request->has('editPassword')) {
            return [
                'postId'       => 'required',
                'editPassword' => [ 'required', 'regex:/\d\d\d\d/', new PostAuthRule($postId) ],
            ];
        }

        return [
            'postId'         => 'required',
            'deletePassword' => [ 'required', 'regex:/\d\d\d\d/', new PostAuthRule($postId) ],
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
            'deletePassword' => '削除キー',
        ];
    }
}

class PostAuthRule implements Rule
{
    private $id;

    public function __construct(string $id)
    {
        $this->id = $id;
    }

    public function passes($attribute, $value)
    {
        $res = DB::table('bbs_posts')
            ->select('password')
            ->where('uuid', $this->id)
            ->first();

        if (is_null($res)) {
            return false;
        }
        
        return Hash::check($value, $res->password);
    }

    public function message()
    {
        return ':attributeが間違っています';
    }
}
