<?php

namespace App\Http\Middleware;

use Closure;

class AuthMizutoriMiddleware
{
    public function handle($request, Closure $next)
    {
        if (session('is_login_mizutori') !== true) {
            return redirect('mizutori/login');
        }

        return $next($request);
    }
}
