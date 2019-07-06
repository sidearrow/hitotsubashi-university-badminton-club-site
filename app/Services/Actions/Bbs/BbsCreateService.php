<?php

namespace App\Services\Actions\Bbs;

use App\Services\FormService;
use App\Services\Actions\AbstractActionService;

class BbsCreateService extends AbstractActionService
{
    private $viewData;

    public function __construct()
    {
        $this->viewData = new \stdClass();
        $this->viewData->form = new \stdClass();
        $this->viewData->backUrl = url('/bbs');
        $this->viewData->formActionUrl = url('/bbs/create-confirm');

        if ($this->hasValidationError()) {
            $errors = $this->getValidationErrors();
            $oldInput = $this->getOldInput();

            $this->viewData->form->title = new FormService(
                $oldInput['title'],
                $errors->has('title'),
                $errors->first('title'),
            );
            $this->viewData->form->author = new FormService(
                $oldInput['author'],
                $errors->has('author'),
                $errors->first('author'),
            );
            $this->viewData->form->content = new FormService(
                $oldInput['content'],
                $errors->has('content'),
                $errors->first('content'),
            );
            $this->viewData->form->password = new FormService(
                '',
                $errors->has('password'),
                $errors->first('password'),
            );

            return;
        }

        if (session()->has('backData')) {
            $backData = session()->get('backData');

            $this->viewData->form->title = new FormService($backData['title']);
            $this->viewData->form->author = new FormService($backData['author']);
            $this->viewData->form->content = new FormService($backData['content']);
            $this->viewData->form->password = new FormService('');

            return;
        }

        $this->viewData->form->title = new FormService('');
        $this->viewData->form->author = new FormService('');
        $this->viewData->form->content = new FormService('');
        $this->viewData->form->password = new FormService('');
    }

    public function getViewData()
    {
        return $this->viewData;
    }
}
