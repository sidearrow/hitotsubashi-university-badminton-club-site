<?php

namespace App\Http\Requests\Bbs;

use Illuminate\Foundation\Http\FormRequest;

abstract class AbstractBbsRequest extends FormRequest
{
    protected const TYPE_CREATE = 0;
    protected const TYPE_EDIT = 1;

    public function authorize()
    {
        return true;
    }

    protected function getRules(int $type)
    {
        $password = [
            self::TYPE_CREATE => ['required', 'regex:/\d\d\d\d/'],
            self::TYPE_EDIT   => [],
        ];

        return [
            'title'    => ['required', 'max:100'],
            'author'   => ['required', 'max:100'],
            'content'  => ['required', 'max:2000'],
            'password' => $password[$type] ?? [],
        ];
    }

    public function getInputTitle(): string
    {
        return $this->input('title');
    }

    public function getInputAuthor(): string
    {
        return $this->input('author');
    }

    public function getInputContent(): string
    {
        return $this->input('content');
    }

    public function getInputPassword(): ?string
    {
        return $this->input('password');
    }
}
