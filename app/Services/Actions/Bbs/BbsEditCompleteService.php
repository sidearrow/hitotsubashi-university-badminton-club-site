<?php

namespace App\Services\Actions\Bbs;

use App\Http\Requests\Bbs\BbsPostEditRequest;
use Illuminate\Support\Facades\DB;

class BbsEditCompleteService
{
    private $updPostId;
    private $updTitle;
    private $updAuthor;
    private $updContent;
    private $updPassword;

    public function __construct(BbsPostEditRequest $request, string $postId)
    {
        $this->updPostId = $postId;
        $this->updTitle = $request->input('title');
        $this->updAuthor = $request->input('author');
        $this->updContent = $request->input('content');
        $this->updPassword = bcrypt($request->input('password'));

        $this->update();
    }

    private function update()
    {
        DB::table('bbs_posts')
            ->where('id', $this->updPostId)
            ->update([
                'title'      => $this->updTitle,
                'author'     => $this->updAuthor,
                'content'    => $this->updContent,
                'password'   => $this->updPassword,
                'updated_at' => now(),
            ]);
    }
}
