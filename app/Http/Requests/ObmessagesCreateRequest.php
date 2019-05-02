<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ObmessagesCreateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'year'  => ['required', 'max:4'],
            'month' => ['required', 'max:2'],
            'name'  => ['required', 'max:10'],
            'file'  => ['required', 'file', 'mimes:pdf', 'size:2000'],
        ];
    }
}
