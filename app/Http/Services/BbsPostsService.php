<?php

namespace App\Http\Services;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BbsPostsService
{
    const PAGE_POST_NUM = 20;

    public function getPost(string $id)
    {
        $res = DB::table('bbs_posts')
            ->select('id', 'title', 'author', 'content', 'password', 'created_at')
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('id', $id)
            ->first();

        return $res;
    }

    public function getComments(string $parentId)
    {
        $res = DB::table('bbs_posts')
            ->select('id', 'author', 'content', 'created_at', 'deleted_at')
            ->where('parent_id', $parentId)
            ->get();

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
                'id'         => uniqid(),
                'title'      => $title,
                'author'     => $author,
                'content'    => $content,
                'password'   => Hash::make($password),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
    }

    public function updatePost(
        string $id,
        string $title,
        string $author,
        string $content,
        string $password
    ) {
        DB::table('bbs_posts')
            ->where('id', $id)
            ->update([
                'title'      => $title,
                'author'     => $author,
                'content'    => $content,
                'password'   => Hash::make($password),
                'updated_at' => Carbon::now(),
            ]);
    }

    public function deletePost(string $id)
    {
        DB::table('bbs_posts')
            ->where('id', $id)
            ->update([
                'deleted_at' => Carbon::now(),
            ]);
    }

    public function createComment(
        string $id,
        string $author,
        string $content,
        string $password
    ) {
        DB::table('bbs_posts')
            ->insert([
                'id'         => uniqid(),
                'author'     => $author,
                'content'    => $content,
                'password'   => Hash::make($password),
                'parent_id'  => $id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
    }
}
