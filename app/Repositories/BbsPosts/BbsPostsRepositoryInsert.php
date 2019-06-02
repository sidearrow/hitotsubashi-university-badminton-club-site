<?php

namespace App\Repositories\BbsPosts;

class BbsPostsRepositoryInsert
{
    public $id;

    public $title;

    public $author;

    public $content;

    public $password;

    public $parentId;

    public $createdAt;

    public $updatedAt;

    public function __invoke() :void
    {
        DB::table('bbs_posts')
            ->insert([
                'id'         => $this->id,
                'title'      => $this->title,
                'author'     => $this->author,
                'content'    => $this->content,
                'password'   => $this->password,
                'parent_id'  => $this->parentId,
                'created_at' => $this->createdAt,
                'updated_at' => $this->updatedAt,
            ]);
    }
}
