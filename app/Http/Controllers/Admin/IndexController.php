<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;

class IndexController extends Controller
{
    public function index()
    {
        return view('pages.admin.index');
    }

    public function loginGet()
    {
        return view('pages.admin.login');
    }

    public function loginPost(AdminLoginRequest $request)
    {
        return redirect('/admin');
    }
}
