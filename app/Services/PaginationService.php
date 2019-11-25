<?php

namespace App\Services;

class PaginationService
{
    private $activePageNum;
    private $limit;
    private $totalNum;
    private $lastPageNum;

    public function __construct(int $activePageNum, int $limit, int $totalNum)
    {
        $this->activePageNum = $activePageNum;
        $this->limit         = $limit;
        $this->totalNum      = $totalNum;
        $this->lastPageNum   = (int) ceil($totalNum / $limit);
    }

    public function getPageList(): array
    {
        if ($this->lastPageNum <= 5) {
            return range(1, $this->lastPageNum);
        }
        if ($this->activePageNum <= 4) {
            return [1, 2, 3, 4, -1, $this->lastPageNum];
        }
        if ($this->lastPageNum - $this->activePageNum <= 3) {
            return [1, -1, $this->lastPageNum - 3, $this->lastPageNum - 2, $this->lastPageNum -1, $this->lastPageNum];
        }
        return [1, -1, $this->activePageNum - 1, $this->activePageNum, $this->activePageNum + 1, -1, $this->lastPageNum];
    }

    public function getMetaText(): string
    {
        $start = ($this->activePageNum - 1) * $this->limit + 1;
        $end = $start + $this->limit;

        return $this->totalNum . ' 件中 ' . $start . ' 件目から ' .$end . ' 件目表示';
    }
}
