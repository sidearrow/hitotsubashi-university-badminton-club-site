<?php
namespace App\Http\Services;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
class ResultsService
{
    public function getResults()
    {
        return Config('const.results');
    }
}
