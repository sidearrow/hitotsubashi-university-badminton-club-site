<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminMembersImportRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            //
        ];
    }

    public function all($keys = null)
    {
        $data = parent::all($keys);

        $file = new \SplFileObject($data['file']->getRealPath());
        $file->setFlags(\SplFileObject::READ_CSV);

        $fileData = [];
        foreach ($file as $i => $row) {
            if ($i === 0) {
                continue;
            }
            if (count($row) === 0 && $row[0] === null) {
                break;
            }
            $fileData[] = [
                'admission_year'        => $row[0],
                'last_name'             => $row[1],
                'first_name'            => $row[2],
                'sx'                    => $row[3],
                'faculty'               => $row[4],
                'highschool'            => $row[5],
                'highschool_prefecture' => $row[6],
                'position'              => $row[7],
                'comment'               => $row[8],
                'file_name'             => $row[9],
            ];
        }

        $data['fileData'] = $fileData;

        return $data;
    }
}
