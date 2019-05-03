<?php

use Illuminate\Database\Seeder;

class MembersTableSeeder extends Seeder
{
    const FILE_PATH = __DIR__ . '/data/members.csv';

    public function run()
    {
        setlocale(LC_ALL, 'ja_JP.UTF-8');

        $file = new SplFileObject(self::FILE_PATH);
        $file->setFlags(SplFileObject::READ_CSV);

        $data = [];
        foreach ($file as $i => $row) {
            if (count($row) === 1 && $row[0] === null) {
                break;
            }

            if ($i === 0) {
                continue;
            }

            $data[] = [
                'admission_year'        => (int)$row[0],
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

        DB::table('members')->insert($data);
    }
}
