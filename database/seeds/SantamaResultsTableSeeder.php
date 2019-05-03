<?php

use Illuminate\Database\Seeder;

class SantamaResultsTableSeeder extends Seeder
{
    const FILE_PATH = __DIR__ . '/data/santama_results.json';

    public function run()
    {
        $data = json_decode(file_get_contents(self::FILE_PATH), true);
        DB::table('santama_results')->insert($data);
    }
}
