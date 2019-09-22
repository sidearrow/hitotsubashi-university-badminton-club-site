<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AuthMizutoriMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::check() && Auth::user()->login_id === 'mizutori') {
            return $next($request);
        }

        return redirect('mizutori/login');
    }
}
