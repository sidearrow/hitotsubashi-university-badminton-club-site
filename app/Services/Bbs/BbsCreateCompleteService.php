<?php

namespace App\Services\Bbs;

use App\Http\Requests\BbsPostRequest;

class BbsCreateCompleteService
{
    public function __construct(BbsPostRequest $request)
    {
        $dbData = new \stdClass();
        $dbData->postId = uniqid();
        $dbData->title = $request->title;
        $dbData->author = $request->author;
        $dbData->content = $request->content;
        $dbData->password = bcrypt($request->password);

        self::insert($dbData);
    }

    private static function insert(\stdClass $data)
    {
        DB::table('bbs_posts')
            ->insert([
                'id'         => $data->postId,
                'title'      => $data->titile,
                'author'     => $data->author,
                'content'    => $data->content,
                'password'   => $data->password,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
    }
}
