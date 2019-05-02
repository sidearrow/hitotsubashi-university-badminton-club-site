<?php

use Illuminate\Database\Seeder;

class ObmessagesTableSeeder extends Seeder
{
    const FILE_PATH = __DIR__ . '/data/obmessages.json';

    public function run()
    {
        $_data = json_decode(file_get_contents(self::FILE_PATH));

        $data = [];
        foreach ($_data as $v) {
            $year = (int)substr($v->filename, 10, 4);
            $month = (int)substr($v->filename, 14, 2);

            if ((int)$year > 2009) {
                $name = (string)$month . '月号';
            } else {
                $name = '第' . (string)$month . '号';
            }

            $data[] = [
                'name'     => $name,
                'year'     => $year,
                'month'    => $month,
                'filename' => $v->filename,
            ];
        }

        DB::table('obmessages')->insert($data);
    }
}
