<?php

namespace App\Repositories\BbsPosts;

class BbsPostsRepositoryUpdate
{
    public $title;

    public $author;

    public $content;

    public $password;

    public $updatedAt;

    public function __invoke(string $id) :void
    {
        DB::table('bbs_posts')
            ->where('id', $id)
            ->insert([
                'title'      => $this->title,
                'author'     => $this->author,
                'content'    => $this->content,
                'password'   => $this->password,
                'updated_at' => $this->updatedAt,
            ]);
    }
}
