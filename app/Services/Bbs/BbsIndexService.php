<?php

namespace App\Services\Bbs;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\ViewModels\Bbs\BbsIndexViewModel;

class BbsIndexService
{
    private const PER_PAGE_NUM = 20;

    private $viewModel;

    public function __construct(Request $request)
    {
        $page  = (int) ($request->get('page') ?? '1');
        $year  = $request->get('searchYear') ?? '';
        $month = $request->get('searchMonth') ?? '';

        $getOffset = function (int $page, int $perPageNum): int {
            return ($page - 1) * $perPageNum + 1;
        };

        $posts = self::getPagePosts(
            (string) self::PER_PAGE_NUM,
            (string) $getOffset($page, self::PER_PAGE_NUM),
            $year,
            $month,
        );

        $postsNum = self::getPostsNum($year, $month);
        $pageLast = (int) (($postsNum + self::PER_PAGE_NUM) / self::PER_PAGE_NUM);

        $this->viewModel = new BbsIndexViewModel();

        $this->viewModel->posts       = $posts;
        $this->viewModel->nowPage     = (string) $page;
        $this->viewModel->pageList    = self::createPageList($page, $pageLast);
        $this->viewModel->postsNum    = (string) $postsNum;
        $this->viewModel->searchYear  = $year;
        $this->viewModel->searchMonth = $month;
    }

    public function getViewModel(): BbsIndexViewModel
    {
        return $this->viewModel;
    }

    private static function getPagePosts(string $limit, string $offset, string $year, string $month)
    {
        return DB::table('bbs_posts')
            ->select(
                'id',
                'title',
                'author',
                'created_at',
            )
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->when($year, function ($query, $year) {
                return $query->whereYear('created_at', $year);
            })
            ->when($month, function ($query, $month) {
                return $query->whereMonth('created_at', $month);
            })
            ->orderBy('created_at', 'desc')
            ->limit($limit)
            ->offset($offset)
            ->get();
    }

    private static function getPostsNum(string $year, string $month): int
    {
        return DB::table('bbs_posts')
            ->when($year, function ($query, $year) {
                return $query->whereYear('created_at', $year);
            })
            ->when($month, function ($query, $month) {
                return $query->whereMonth('created_at', $month);
            })
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->count();
    }

    private static function createPageList(int $page, int $pageLast): array
    {
        if ($pageLast === 0) {
            return [-1];
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
        if ($page >= $pageLast - 1) {
            return [1, -1, $pageLast - 2, $pageLast - 1, $pageLast];
        }
        if ($page === $pageLast - 2) {
            return [1, -1, $pageLast - 3, $pageLast - 2, $pageLast - 1, $pageLast];
        }

        return [1, -1, $page - 1, $page, $page + 1, -1, $pageLast];
    }
}
