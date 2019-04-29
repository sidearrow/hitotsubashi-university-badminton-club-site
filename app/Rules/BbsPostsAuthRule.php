<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class BbsPostsAuthRule implements Rule
{
    private $id;

    public function __construct(string $id = '')
    {
        $this->id = $id;
    }

    public function passes($attribute, $value) :bool
    {
        $authGuardBbsPost = Auth::guard('bbsPost');

        $isAuth = $authGuardBbsPost->attempt([
                'uuid' => $this->id,
                'password' => $value,
            ]);

        if (!$isAuth) {
            $authGuardBbsPost->logout();
        }

        return $isAuth;
    }

    public function message() :string
    {
        return ':attributeが間違っています';
    }
}
