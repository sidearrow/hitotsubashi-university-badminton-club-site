<?php

namespace App\Services\Actions\Results;

use App\Services\Actions\AbstractActionService;

class DetailService extends AbstractActionService
{
    public function __construct(string $resultId)
    {
        parent::__construct();

        $filePath = storage_path('/app/files/results/results_' . $resultId . '.json');
        if (!file_exists($filePath)) {
            $this->notFound = true;
            return;
        }

        $this->viewData->results = json_decode(file_get_contents($filePath));
    }
}
