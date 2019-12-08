<?php

namespace App\Http\Requests\Bbs;

class BbsCreateRequest extends AbstractBbsRequest
{
    public function rules()
    {
        return $this->getRules(self::TYPE_CREATE);
    }
}
