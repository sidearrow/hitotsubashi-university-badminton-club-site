<?php

namespace App\Http\Controllers\Mizutori;

use App\Http\Controllers\Controller;

class OBMessagesController extends Controller
{
    public function __invoke(string $fileName)
    {
        $filePath = storage_path('app/files/ob_messages/' . $fileName);

        if (!file_exists($filePath)) {
            abort(404);
        }

        return response()->file($filePath);
    }
}
