<?php

namespace App\Repositories\BbsPosts;

use App\Repositories\AbstractRepository;

class BbsPostsRepositorySelectPage extends AbstractRepository
{
    public function __invoke(int $limit, int $offset, string $yearMonth): array
    {
        $bindArray = [];

        $sql  = ' SELECT';
        $sql .= '   id';
        $sql .= '  ,title';
        $sql .= '  ,author';
        $sql .= '  ,created_at';
        $sql .= ' FROM';
        $sql .= '   bbs_posts';
        $sql .= ' WHERE';
        $sql .= '   parent_id IS NULL';
        $sql .= '   AND deleted_at IS NULL';

        if ($yearMonth !== '') {
            $sql .= "   AND DATE_FORMAT(created_at, '%Y%m') = :year_month";
            $bindArray['year_month'] = $yearMonth;
        }

        $sql .= ' ORDER BY';
        $sql .= '   created_at desc';
        $sql .= " LIMIT ${limit}";
        $sql .= " OFFSET ${offset}";

        return $this->select($sql, $bindArray);
    }
}
