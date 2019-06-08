<?php

namespace App\Http\Controllers\Bbs;

use Illuminate\Http\Request;
use App\Services\BbsService;

class BbsIndexController
{
    public function __invoke(Request $request, BbsService $bbsService)
    {
        $page  = (int)($request->page ?? '1');
        $year  = $request->searchYear ?? '';
        $month = $request->searchMonth ?? '';

        $posts    = $bbsService->getPagePosts($page, $year, $month);
        $postsNum = $bbsService->getPostsNum($year, $month);

        $pageLast = (int)(($postsNum + 19) / 20);
        $pageList = $bbsService->createPageList($page, $pageLast);

        return view('pages.bbs.index', [
            'page'            => (string)$page,
            'pageList'        => $pageList,
            'urlWithoutPage'  => url()->current() . '?' . http_build_query(['searchYear' => $year, 'searchMonth' => $month]),
            'posts'           => $posts,
            'postsNum'        => $postsNum,
            'searchYearList'  => ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            'searchMonthList' => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            'searchYear'      => $year ?? '2012',
            'searchMonth'     => $month ?? '1',
        ]);
    }
}
