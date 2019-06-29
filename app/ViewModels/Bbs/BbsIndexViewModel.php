<?php

namespace App\ViewModels\Bbs;

class BbsIndexViewModel
{
    const SEARCH_YEAR_LIST = [
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
        '2012',
    ];

    const SEARCH_MONTH_LIST = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
    ];

    public $posts;

    /** @var string $nowPage */
    public $nowPage;

    /** @var array $pageList */
    public $pageList;

    /** @var string $postsNum */
    public $postsNum;

    /** @var string $searchYear */
    public $searchYear;

    /** @var string $searchMonth */
    public $searchMonth;

    public function getUrlByPageNum(string $page): string
    {
        return url()->current() . '?'
            . 'page=' . $page
            . http_build_query([
                'searchYear' => $this->searchYear,
                'searchMonth' => $this->searchMonth,
            ]);
    }
}
