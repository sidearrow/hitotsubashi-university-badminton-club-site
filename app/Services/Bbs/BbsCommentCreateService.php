<?php

namespace App\Services\Bbs;

use App\Http\Requests\BbsPostCommentCreateRequest;
use Illuminate\Support\Facades\DB;

class BbsCommentCreateService
{
    public function __construct(BbsPostCommentCreateRequest $request, string $postId)
    {
        $data = new \StdClass();

        $data->id = uniqid();
        $data->parentId = $postId;
        $data->author = $request->author;
        $data->content = $request->content;
        $data->password = bcrypt($request->password);

        $this->create($data);
    }

    private function create(\stdClass $data)
    {
        $now = now();

        DB::table('bbs_posts')
            ->insert([
                'id'         => $data->id,
                'parent_id'  => $data->parentId,
                'author'     => $data->author,
                'content'    => $data->content,
                'password'   => $data->password,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
    }
}
