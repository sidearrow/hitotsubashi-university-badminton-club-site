<?php

namespace App\Http\Controllers\Mizutori;

use App\Http\Controllers\Controller;
use App\Http\Requests\MizutoriLoginRequest;

class LoginPostController extends Controller
{
    public function __invoke(MizutoriLoginRequest $request)
    {
        return redirect('mizutori');
    }
}
