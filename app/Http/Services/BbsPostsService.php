<?php

namespace App\Http\Services;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BbsPostsService
{
    const PAGE_POST_NUM = 20;

    private $table;

    public function __construct()
    {
        $this->table = DB::table('bbs_posts');
    }

    public function getPost(string $uuid)
    {
        $res = $this->table
            ->select(
                'uuid',
                'title',
                'author',
                'content',
                'created_at',
            )
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('uuid', $uuid)
            ->first();

        return $res;
    }

    public function getPosts(int $pageNum = 1)
    {
        $data = $this->table
            ->select(
                'uuid',
                'title',
                'author',
                'created_at'
            )
            ->whereNull('parent_id')
            ->orderBy('created_at')
            ->get();

        return $data;
    }

    public function getPostsNum() :int
    {
        $res = $this->table
            ->whereNull('parent_id')
            ->count();

        return $res;
    }

    public function getComments(string $uuid)
    {
        $sql = 
            "select * from bbs_posts " .
            "where parent_id in (select id from bbs_posts where uuid = :uuid)";
        $binds = [
            'uuid' => $uuid
        ];
        $res = DB::raw($sql, $binds);

        return $res;
    }

    public function insertPost(
        string $title,
        string $author,
        string $content,
        string $password
    )
    {
        $this->table->insert([
            'uuid'       => uniqid(),
            'title'      => $title,
            'author'     => $author,
            'content'    => $content,
            'password'   => Hash::make($password),
            'created_at' => Carbon::now(),
        ]);
    }

    public function updatePost(
        string $uuid,
        string $title,
        string $author,
        string $content,
        string $password
    ) {
        $this->table
            ->where('uuid', $uuid)
            ->update([
                'title' => $title,
                'author' => $author,
                'content' => $content,
                'password' => Hash::make($password),
                'updated_at' => Carbon::now(),
            ]);
    }
}
