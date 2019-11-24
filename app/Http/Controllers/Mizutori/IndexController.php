<?php

namespace App\Http\Controllers\Mizutori;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = json_decode(file_get_contents(storage_path('app/files/ob_messages.json')), true);

        return view('pages.mizutori.index', [
            'data' => $data,
        ]);
    }
}
