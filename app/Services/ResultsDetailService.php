<?php

namespace App\Services;

use App\Repositories\ResultsDetail\ResultsDetailRepository;

class ResultsDetailService
{
    private $viewData;

    public function __construct(string $id)
    {
        $this->viewData = new \stdClass();

        $this->viewData->teamDetail = [];
        $this->viewData->indivDetail = [];

        foreach ((new ResultsDetailRepository($id))->get() as $v) {
            if ($v->gameNo === '1') {
                $this->viewData->indivDetail[$v->no] = [];
            }

            $this->viewData->indivDetail[$v->no] = [
                'aName1'  => $v->aName1,
                'aName2'  => $v->aName2,
                'bName1'  => $v->bName1,
                'bName2'  => $v->bName2,
                'aScore1' => $v->aScore1,
                'bScore1' => $v->bScore1,
                'aScore2' => $v->aScore2,
                'bScore2' => $v->bScore2,
                'aScore3' => $v->aScore3,
                'bScore3' => $v->bScore3,
            ];
        }
    }

    public function getViewData()
    {
        return $this->viewData;
    }
}
