<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bbs\BbsEditAuthRequest;
use App\Http\Requests\Bbs\BbsPostEditRequest;
use App\Services\Actions\Bbs\BbsEditCompleteService;
use App\Repositories\BbsPosts\BPRepoGetFirst;

class EditController extends Controller
{
    public function input(BbsEditAuthRequest $request, string $postId)
    {
        $dbData = (new BPRepoGetFirst())->exec($postId);

        $input = [
            'title'   => $dbData->title,
            'author'  => $dbData->author,
            'content' => $dbData->content,
        ];

        session()->put('_old_input', $input);

        return view('pages.bbs.edit-input', [
            'postId' => $postId,
        ]);
    }

    public function confirm(BbsPostEditRequest $request, string $postId)
    {
        return view('pages.bbs.edit-confirm', [
            'postId' => $postId,
        ]);
    }

    public function complete(string $postId)
    {
        return view('pages.bbs.edit-complete', [
            'backUrl' => url('bbs/' . $postId),
        ]);
    }

    public function completePost(BbsPostEditRequest $request, string $postId)
    {
        new BbsEditCompleteService($request, $postId);

        return redirect('bbs/' . $postId . '/edit-complete');
    }
}
