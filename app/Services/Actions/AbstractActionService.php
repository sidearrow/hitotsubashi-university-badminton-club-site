<?php

namespace App\Services\Actions;

abstract class AbstractActionService
{
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
