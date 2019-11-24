<?php

namespace App\Http\Controllers\Mizutori;

use App\Http\Controllers\Controller;
use App\Services\AuthMizutoriService;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function __invoke(Request $request)
    {
        (new AuthMizutoriService)->logout();

        return redirect('mizutori/login');
    }
}
