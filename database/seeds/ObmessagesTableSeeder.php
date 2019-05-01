<?php

use Illuminate\Database\Seeder;

class ObmessagesTableSeeder extends Seeder
{
    const FILE_PATH = __DIR__ . '/data/obmessages.json';

    public function run()
    {
        $_data = json_decode(file_get_contents(self::FILE_PATH));

        $data = [];
        $yearIndex = 0;
        foreach ($_data as $v) {
            $year = (int)substr($v->filename, 10, 4);
            $month = (int)substr($v->filename, 14, 2);

            if ($year > 2009) {
                $name = $month . '月号';
            } else {
                $name = '第' . $month . '号';
            }

            if (count($data) !== 0) {
                $lastData = $data[array_key_last($data)];
                $yearIndex = ((int)$lastData['year'] === $year) ? $yearIndex + 1 : 0;
            }

            $data[] = [
                'name'       => $name,
                'year'       => (string)$year,
                'year_index' => $yearIndex,
                'filename'   => $v->filename,
            ];
        }

        DB::table('obmessages')->insert($data);
    }
}
