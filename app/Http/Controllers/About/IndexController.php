<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        $viewData = [
            'practiceTime' => self::getPracticeTimeData(),
        ];

        return view('pages.about.index', $viewData);
    }

    private static function getPracticeTimeData(): array
    {
        $data = file_get_contents(storage_path('app/files/practice_time_table.json'));
        $data = json_decode($data, true);

        return $data;
    }
}
