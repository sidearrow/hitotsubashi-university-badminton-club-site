<?php

namespace App\Services\Bbs;

use App\Http\Requests\BbsPostEditRequest;
use Illuminate\Support\Facades\DB;

class BbsEditCompleteService
{
    public function __construct(BbsPostEditRequest $request, string $postId)
    {
        $data = new \stdClass();

        $data->postId = $postId;
        $data->title = $request;
        $data->author = $request->author;
        $data->content = $request->content;
        $data->password = bcrypt($request->password);

        self::update($data);
    }

    private static function update(\stdClass $data)
    {
        DB::table('bbs_posts')
            ->where('id', $data->postId)
            ->update([
                'title'      => $data->title,
                'author'     => $data->author,
                'content'    => $data->content,
                'password'   => $data->password,
                'updated_at' => now(),
            ]);
    }
}
