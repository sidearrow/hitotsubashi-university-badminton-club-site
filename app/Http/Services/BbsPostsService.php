<?php

namespace App\Http\Services;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BbsPostsService
{
    const PAGE_POST_NUM = 20;

    public function getPost(string $uuid)
    {
        $res = DB::table('bbs_posts')
            ->select(
                'uuid',
                'title',
                'author',
                'content',
                'password',
                'created_at',
            )
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('uuid', $uuid)
            ->first();

        return $res;
    }

    public function getPosts(int $pageNum = 1, string $year, string $month)
    {
        $data = DB::table('bbs_posts')
            ->select(
                'uuid',
                'title',
                'author',
                'created_at'
            )
            ->when($year, function ($query, $year) {
                return $query->whereYear('created_at', $year);
            })
            ->when($month, function ($query, $month) {
                return $query->whereMonth('created_at', $month);
            })
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->orderBy('created_at', 'desc')
            ->offset(($pageNum - 1) * self::PAGE_POST_NUM)
            ->limit(self::PAGE_POST_NUM)
            ->get();

        return $data;
    }

    public function getPostsNum(string $year, string $month) :int
    {
        $res = DB::table('bbs_posts')
            ->when($year, function ($query, $year) {
                return $query->whereYear('created_at', $year);
            })
            ->when($month, function ($query, $month) {
                return $query->whereMonth('created_at', $month);
            })
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
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
    ) {
        DB::table('bbs_posts')
            ->insert([
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
        DB::table('bbs_posts')
            ->where('uuid', $uuid)
            ->update([
                'title' => $title,
                'author' => $author,
                'content' => $content,
                'password' => Hash::make($password),
                'updated_at' => Carbon::now(),
            ]);
    }

    public function deletePost(string $id)
    {
        DB::table('bbs_posts')
            ->where('uuid', $id)
            ->update([
                'deleted_at' => Carbon::now(),
            ]);
    }
}
