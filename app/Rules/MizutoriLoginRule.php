<?php

namespace App\Rules;

use App\Models\MUser;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class MizutoriLoginRule implements Rule
{

    public function passes($attribute, $value)
    {
        $user = MUser::where('login_id', 'mizutori')->first();

        if (isset($user->password) && password_verify($value, $user->password)) {
            Auth::login($user);

            return true;
        }

        return false;
    }

    public function message()
    {
        return 'パスワードが間違っています';
    }
}
