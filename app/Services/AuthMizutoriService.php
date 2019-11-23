<?php

namespace App\Services;

class AuthMizutoriService
{
    private const IS_LOGIN_MIZUTORI_SESSION_KEY_NAME = 'is_login_mizutori';

    public function isLogin(): bool
    {
        return session(self::IS_LOGIN_MIZUTORI_SESSION_KEY_NAME) === true;
    }

    public function login(string $password): bool
    {
        if (password_verify($password, config('app.password_mizutori'))) {
            session()->put(self::IS_LOGIN_MIZUTORI_SESSION_KEY_NAME, true);
            return true;
        }
        return false;
    }

    public function logout(): void
    {
        session()->remove(self::IS_LOGIN_MIZUTORI_SESSION_KEY_NAME);
    }
}
