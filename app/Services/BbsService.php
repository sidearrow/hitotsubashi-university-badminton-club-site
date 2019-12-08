<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class BbsService
{
    private const TABLE_T_BBS_POST = 't_bbs_post';

    public function authPost(string $bbsPostId, string $password): bool
    {
        $data = DB::table(self::TABLE_T_BBS_POST)
            ->select([
                'password',
            ])
            ->where('id', '=', $bbsPostId)
            ->first();

        return $data === null ? false : password_verify($password, $data->password ?? '');
    }

    public function createPost(
        ?string $parentId,
        string $title,
        string $author,
        string $content,
        string $password
    ): void {
        DB::table(self::TABLE_T_BBS_POST)
            ->insert([
                'id' => DB::raw(
                    '('
                        . DB::table(
                            DB::raw(
                                '('
                                    . DB::table(self::TABLE_T_BBS_POST)
                                    ->select(
                                        DB::raw("ifnull(max(id), date_format(now(), '%y%m%d000')) + 1")
                                    )
                                    ->whereBetween('id', [
                                        DB::raw("date_format(now(), '%y%m%d000')"),
                                        DB::raw("date_format(now() + interval 1 day, '%y%m%d000')")
                                    ])
                                    ->toSql()
                                    . ') as id'
                            )
                        )
                        ->select()
                        ->toSql()
                        . ')'
                ),
                'title'      => $title,
                'author'     => $author,
                'content'    => $content,
                'password'   => self::passwordHash($password),
                'parent_id'  => $parentId,
                'delete_flg' => 0,
                'created_at' => DB::raw('now()'),
                'updated_at' => DB::raw('now()'),
            ]);
    }

    public function editPost(
        string $bbsPostId,
        string $title,
        string $author,
        string $content
    ): void {
        DB::table(self::TABLE_T_BBS_POST)
            ->where('id', '=', $bbsPostId)
            ->update([
                'title'      => $title,
                'author'     => $author,
                'content'    => $content,
                'updated_at' => DB::raw('now()'),
            ]);
    }

    public function deletePost(string $bbsPostId): void
    {
        DB::table(self::TABLE_T_BBS_POST)
            ->where('id', '=', $bbsPostId)
            ->update([
                'delete_flg' => 1,
            ]);
    }

    private static function passwordHash(string $password): string
    {
        return password_hash($password, PASSWORD_DEFAULT);
    }
}
