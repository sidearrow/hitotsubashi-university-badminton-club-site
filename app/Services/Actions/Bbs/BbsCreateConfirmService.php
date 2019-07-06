<?php

namespace App\Services\Actions\Bbs;

use App\Http\Requests\Bbs\BbsCreateRequest;

class BbsCreateConfirmService
{
    private $viewData;

    public function __construct(BbsCreateRequest $request)
    {
        session()->flash('backData', $request->all());

        $this->viewData = new \stdClass();

        $this->viewData->title = $request->input('title');
        $this->viewData->author = $request->input('author');
        $this->viewData->content = $request->input('content');
        $this->viewData->password = $request->input('password');

        $this->viewData->backUrl = url('/bbs/create');
        $this->viewData->formActionUrl = url('/bbs/create-complete');
    }

    public function getViewData()
    {
        return $this->viewData;
    }
}
