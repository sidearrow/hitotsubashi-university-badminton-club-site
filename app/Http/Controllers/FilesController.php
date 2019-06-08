<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class FilesController extends Controller
{
    public function obmessages(string $fileName)
    {
        $filePath = storage_path('app/files/obmessages/' . $fileName);

        if (!file_exists($filePath)) {
            abort(404);
        }

        if (Auth::check() && (Auth::user()->login_id === 'mizutori' || Auth::user()->login_id === 'admin')) {
            return response()->file($filePath);
        }

        abort(401);
    }
}
