<?php

namespace App\Http\Controllers\Mizutori;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function __invoke(Request $request)
    {
        $dirName = $request->route('dirName');
        $fileName = $request->route('fileName');

        $filePath = storage_path("app/files/mizutori/{$dirName}/{$fileName}");

        if (!file_exists($filePath)) {
            abort(404);
        }

        return response()->file($filePath);
    }
}
