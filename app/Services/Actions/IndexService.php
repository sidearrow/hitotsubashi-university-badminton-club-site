<?php

namespace App\Services\Actions;

use Illuminate\Support\Facades\DB;

class IndexService
{
    private $viewData;

    public function __construct()
    {
        $this->viewData = new \stdClass();

        $this->viewData->topImages = $this->getTopImagesUrl();
        //$this->viewData->introWording = $this->getIntroWording();
        $this->viewData->introWording =
            "2018年7月現在、私達一橋大学バドミントン部は男子22名、女子5名の計25名で活動しています。\n" .
            "関東学生バドミントン連盟男子は4部、女子は5部に所属しています。\n" .
            "男女・経験者大学始め関係なく、リーグでの昇格を目指して日々練習に励んでいます。";
    }

    public function getViewData()
    {
        return $this->viewData;
    }

    private function getIntroWording() :string
    {
        return DB::table('mst_wording')
            ->select('value')
            ->where('wording_id', '=', 'W01001')
            ->first()
            ->value;
    }

    private function getTopImagesUrl() :array
    {
        $files = [];
        foreach (glob(storage_path('app/public/top') . '/*') as $file) {
            $files[] = asset('storage/top/' . basename($file));
        }

        return $files;
    }
}
