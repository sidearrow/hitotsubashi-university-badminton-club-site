<?php

namespace App\Services\Actions\Bbs;

use App\Services\FormService;
use App\Services\Actions\AbstractActionService;
use Illuminate\Support\Facades\DB;

class BbsEditService extends AbstractActionService
{
    private $viewData;

    private $postId;

    public function __construct(string $postId)
    {
        $this->postId = $postId;
        
        $dbData = $this->getPostData($postId);

        $this->viewData = new \stdClass();
        $this->viewData->postId = $this->postId;
        $this->viewData->form = new \stdClass();
        $this->viewData->backUrl = url('/bbs/' . $postId);
        $this->viewData->formActionUrl = url('/bbs/' . $postId . '/edit-confirm');

        debug(session()->has('backData'));

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

        $this->viewData->form->title = new FormService($dbData->title);
        $this->viewData->form->author = new FormService($dbData->author);
        $this->viewData->form->content = new FormService($dbData->content);
        $this->viewData->form->password = new FormService('');
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private function getPostData()
    {
        return DB::table('bbs_posts')
            ->select(
                'id',
                'title',
                'author',
                'content',
                'password',
                'created_at'
            )
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('id', $this->postId)
            ->first();
    }
}
