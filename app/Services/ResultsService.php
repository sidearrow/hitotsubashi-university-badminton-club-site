<?php

namespace App\Services;

use App\Repositories\Results\ResultsRepositoryGet;

class ResultsService
{
    private $viewData;

    public function __construct()
    {
        $this->viewData = new \stdClass();

        $this->viewData->table = [];
    }

    public function getViewData()
    {
        $repository = new ResultsRepositoryGet();
        $data = $repository->get();

        foreach ($data as $v) {
            array_unshift($this->viewData->table, [
                'year'    => $v->year,
                'season'  => $this->getSeason($v->season),
                'mResult' => $this->getResult($v->mClass, $v->mRank, $v->mFlag, $v->mRemarks),
                'fResult' => $this->getResult($v->fClass, $v->fRank, $v->fFlag, $v->fRemarks),
            ]);
        }

        return $this->viewData;
    }

    private function getSeason(string $code): string
    {
        if ($code === '1') {
            return '春';
        }
        if ($code === '2') {
            return '秋';
        }
        return '';
    }

    private function getFlag(string $code): string
    {
        if ($code === '-1') {
            return '降格';
        }
        if ($code === '1') {
            return '昇格';
        }
        return '';
    }

    private function getResult(string $class, string $rank, string $flag, string $remarks): string
    {
        if ($remarks !== '') {
            return $remarks;
        }

        return $class . ' 部 ' . $rank . ' 位 ' . $this->getFlag($flag);
    }
}
