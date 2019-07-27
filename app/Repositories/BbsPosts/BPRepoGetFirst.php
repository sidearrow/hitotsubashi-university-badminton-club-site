<?php

namespace App\Repositories\BbsPosts;

use App\Repositories\AbstractRepository;

class BPRepoGetFirst extends AbstractRepository
{
    public $title;
    public $author;
    public $content;

    public function exec(string $postId): self
    {
        $sql  = " SELECT";
        $sql .= "   title";
        $sql .= "  ,author";
        $sql .= "  ,content";
        $sql .= " FROM";
        $sql .= "   bbs_posts";
        $sql .= " WHERE";
        $sql .= "   id = :post_id";

        return $this->dbGetFirst($sql, [
            'post_id' => $postId,
        ]);
    }
}
