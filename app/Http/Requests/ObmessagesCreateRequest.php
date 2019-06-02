<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ObmessagesCreateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $ruleWithYearUnique = Rule::unique('obmessages')->where(function ($query) {
            $query->where('year', $this->input('year'));
        });

        return [
            'year'  => ['required', 'max:4'],
            'month' => ['required', 'max:2', $ruleWithYearUnique],
            'name'  => ['required', 'max:10', $ruleWithYearUnique],
            'file'  => ['required', 'file', 'mimes:pdf', 'max:2000'],
        ];
    }

    public function attributes()
    {
        return [
            'year'  => '年',
            'month' => '月',
            'name'  => '表示名',
            'file'  => 'ファイル',
        ];
    }

    public function messages()
    {
        return [
            '*.unique' => '入力された [:attribute] は同じ [年] にすでに存在します',
            'file.max'     => ':attributeは2000KB以内のファイルを指定してください',
        ];
    }
}
