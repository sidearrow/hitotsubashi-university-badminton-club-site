<?php

namespace App\Repositories\ResultsDetail;

use App\Repositories\AbstractCsvRepository;
use App\Repositories\ResultsDetail\ResultsDetailRepositoryGetOutput;

class ResultsDetailRepository extends AbstractCsvRepository
{
    public function __construct(string $id)
    {
        parent::__construct(storage_path('app/files/results/results_detail_' . $id . '.csv'));
    }

    /**
     * @return ResultsDetailRepositoryGetOutput[]
     */
    public function get(): array
    {
        $res = [];

        foreach ($this->file as $i => $v) {
            if ($i === 0) {
                continue;
            }

            $tmp = new ResultsDetailRepositoryGetOutput();

            $tmp->no      = $v[0];
            $tmp->vs      = $v[1];
            $tmp->aGame   = $v[2];
            $tmp->bGame   = $v[3];
            $tmp->remarks = $v[4];
            $tmp->gameNo  = $v[5];
            $tmp->aName1  = $v[6];
            $tmp->aName2  = $v[7];
            $tmp->bName1  = $v[16];
            $tmp->bName2  = $v[17];
            $tmp->aSet    = $v[8];
            $tmp->bSet    = $v[15];
            $tmp->aScore1 = $v[9];
            $tmp->bScore1 = $v[10];
            $tmp->aScore2 = $v[11];
            $tmp->bScore2 = $v[12];
            $tmp->aScore3 = $v[13];
            $tmp->bScore3 = $v[14];
            $tmp->aMc     = $v[18];
            $tmp->bMc     = $v[19];

            $res[] = $tmp;
        }

        return $res;
    }
}
