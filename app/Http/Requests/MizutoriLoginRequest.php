<?php

namespace App\Http\Requests;

use App\Rules\MizutoriLoginRule;
use Illuminate\Foundation\Http\FormRequest;

class MizutoriLoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'mizutori_password' => ['required', new MizutoriLoginRule()],
        ];
    }
}
