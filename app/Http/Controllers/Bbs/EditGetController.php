<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EditGetController extends Controller
{
    private $bbsPostId;

    public function __invoke(Request $request)
    {
        $this->bbsPostId = $request->route('bbsPostId');

        if (session()->get('editBbsPostId') !== $this->bbsPostId) {
            abort(401);
        }
        session()->flash('editBbsPostId', $this->bbsPostId);

        $data = $this->getData();

        return view('pages.bbs.edit', [
            'post' => [
                'title'   => $data->title ?? '',
                'author'  => $data->author ?? '',
                'content' => $data->content ?? '',
            ],
        ]);
    }

    private function getData(): ?\stdClass
    {
        return DB::table('t_bbs_post')
            ->select([
                'title',
                'author',
                'content',
            ])
            ->where('id', '=', $this->bbsPostId)
            ->first();
    }
}
