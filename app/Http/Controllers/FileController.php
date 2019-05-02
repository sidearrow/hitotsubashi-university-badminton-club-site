<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FileController extends Controller
{
    public function obmessages(string $filename)
    {
        $filePath =  config('const.filesDirPath') . '/obmessages/' . $filename;

        if (!file_exists($filePath)) {
            return abort(404);
        }

        if (
            !Auth::guard('user')->check() ||
            (Auth::guard('user')->user()->login_id !== 'mizutori' &&
             Auth::guard('user')->user()->login_id !== 'admin')
        ) {
            return abort(401);
        }

        return response()->file($filePath);
    }
}
