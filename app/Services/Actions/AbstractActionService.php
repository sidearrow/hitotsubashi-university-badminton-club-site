<?php

namespace App\Services\Actions;

abstract class AbstractActionService
{
    /**
     * @var \stdClass $viewData
     */
    protected $viewData;

    /**
     * @var bool $notFound
     */
    protected $notFound = false;

    public function __construct()
    {
        $this->viewData = new \stdClass();
    }

    public function getViewData(): \stdClass
    {
        return $this->viewData;
    }

    public function isNotFound(): bool
    {
        return $this->notFound;
    }

    protected function hasValidationError()
    {
        return session()->has('_old_input') && session()->has('errors');
    }

    /**
     * @return \Illuminate\Support\ViewErrorBag
     */
    protected function getValidationErrors()
    {
        return session()->get('errors');
    }

    protected function getOldInput()
    {
        return session()->get('_old_input');
    }
}
