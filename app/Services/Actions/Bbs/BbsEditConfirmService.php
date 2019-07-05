<?php

namespace App\Services\Actions\Bbs;

use App\Http\Requests\BbsPostEditRequest;

class BbsEditConfirmService
{
    private $viewData;

    public function __construct(BbsPostEditRequest $request, string $postId)
    {
        session()->flash('backData', $request->all());

        $this->viewData = new \stdClass();

        $this->viewData->title = $request->input('title');
        $this->viewData->author = $request->input('author');
        $this->viewData->content = $request->input('content');
        $this->viewData->password = $request->input('password');

        $this->viewData->backUrl = url('/bbs/' . $postId . '/edit');
        $this->viewData->formActionUrl = url('/bbs/' . $postId . '/edit-complete');
    }

    public function getViewData()
    {
        return $this->viewData;
    }
}
