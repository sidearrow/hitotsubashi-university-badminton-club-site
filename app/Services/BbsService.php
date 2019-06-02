<?php

namespace App\Services;

use App\Repositories\BbsPosts\{
    BbsPostsRepositorySelectPage, BbsPostsRepositorySelectCount
};

class BbsService
{
    public function getPagePosts(int $pageNum, string $year, string $month)
    {
        return (new BbsPostsRepositorySelectPage())($pageNum, 20, $year, $month);
    }

    public function getPostsNum(string $year, string $month)
    {
        return (new BbsPostsRepositorySelectCount())($year, $month);
    }

    public function createPageList(int $page, int $pageLast) :array
    {
        if ($pageLast === 0) {
            return [0];
        }
        if ($pageLast <= 5) {
            return range(1, $pageLast);
        }
        if ($page <= 2) {
            return [1, 2, 3, -1, $pageLast];
        }
        if ($page === 3) {
            return [1, 2, 3, 4, -1, $pageLast];
        }
        if ($page >= $pageLast-1) {
            return [1, -1, $pageLast-2, $pageLast-1, $pageLast];
        }
        if ($page === $pageLast-2) {
            return [1, -1, $pageLast-3, $pageLast-2, $pageLast-1, $pageLast];
        }
        return [1, -1, $page-1, $page, $page+1, -1, $pageLast];
    }
}
