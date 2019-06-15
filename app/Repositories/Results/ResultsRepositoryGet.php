<?php

namespace App\Repositories\Results;

use App\Repositories\AbstractCsvRepository;

class ResultsRepositoryGet extends AbstractCsvRepository
{
    public function __construct()
    {
        parent::__construct(storage_path('app/files/results/results.csv'));
    }

    /**
     * @return ResultsRepositoryGetOutput[]
     */
    public function get(): array
    {
        $res = [];

        foreach($this->file as $i => $v) {
            if ($i === 0) {
                continue;
            }
            if ($v[0] === null) {
                break;
            }

            $tmp = new ResultsRepositoryGetOutput();

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
}
