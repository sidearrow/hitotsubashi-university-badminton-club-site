<?php

namespace App\Http\Controllers\Mizutori;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $viewData = [
            'data' => self::getData(),
        ];

        return view('pages.mizutori.index', $viewData);
    }

    private static function getData(): array
    {
        $data = file_get_contents(storage_path('app/files/obmessages.json'));
        $data = json_decode($data, true);

        $res = [];
        foreach ($data as $v) {
            if (!array_key_exists($v['year'], $res)) {
                $res[$v['year']] = [];
            }
            $res[$v['year']][] = $v;
        }

        krsort($res);

        return $res;
    }
}
