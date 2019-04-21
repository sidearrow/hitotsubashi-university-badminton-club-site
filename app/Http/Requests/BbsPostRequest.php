<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BbsPostRequest extends FormRequest
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
            'password' => 'required|max:4',
        ];
    }
}
