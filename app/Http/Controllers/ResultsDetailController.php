<?php

namespace App\Http\Controllers;

use App\Services\ResultsDetailService;

class ResultsDetailController extends Controller
{
    public function __invoke(string $id)
    {
        $serive = new ResultsDetailService($id);
        dd($serive->getViewData());

        return view('pages.results_detail', ['viewData' => 'a']);
    }
}
