<?php

namespace App\Services;

class ResultsService
{
    private const CSV_PATH = 'app/files/results/results.csv';

    private $viewData;

    public function __construct()
    {
        $this->viewData = new \stdClass();

        $this->viewData->table = [];
    }

    public function getViewData()
    {
        foreach (self::getData() as $v) {
            array_unshift($this->viewData->table, [
                'year'    => $v->year,
                'season'  => self::getSeason($v->season),
                'mResult' => self::getResult($v->mClass, $v->mRank, $v->mFlag, $v->mRemarks),
                'fResult' => self::getResult($v->fClass, $v->fRank, $v->fFlag, $v->fRemarks),
            ]);
        }

        return $this->viewData;
    }

    private static function getData()
    {
        $file = new \SplFileObject(storage_path(self::CSV_PATH));
        $file->setFlags(\SplFileObject::READ_CSV);

        $res = [];
        foreach($file as $i => $v) {
            if ($i === 0) {
                continue;
            }
            if ($v[0] === null) {
                break;
            }

            $tmp = new \stdClass();

            $tmp->year     = $v[0];
            $tmp->season   = $v[1];
            $tmp->mClass   = $v[2];
            $tmp->mRank    = $v[3];
            $tmp->mFlag    = $v[4];
            $tmp->mDetail  = $v[5];
            $tmp->fClass   = $v[6];
            $tmp->fRank    = $v[7];
            $tmp->fFlag    = $v[8];
            $tmp->fDetail  = $v[9];
            $tmp->mRemarks = $v[10];
            $tmp->fRemarks = $v[11];

            $res[] = $tmp;
        }

        return $res;
    }

    private static function getSeason(string $code): string
    {
        if ($code === '1') {
            return '春';
        }
        if ($code === '2') {
            return '秋';
        }
        return '';
    }

    private static function getFlag(string $code): string
    {
        if ($code === '-1') {
            return '降格';
        }
        if ($code === '1') {
            return '昇格';
        }
        return '';
    }

    private static function getResult(string $class, string $rank, string $flag, string $remarks): string
    {
        if ($remarks !== '') {
            return $remarks;
        }

        return $class . ' 部 ' . $rank . ' 位 ' . self::getFlag($flag);
    }
}
