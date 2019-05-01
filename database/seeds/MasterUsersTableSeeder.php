<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class MasterUserTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'login_id' => 'mizutori',
                'password' => 'komaakio'
            ]
        ];

        foreach ($data as $v) {
            DB::table('master_users')
                ->insert([
                    'login_id' => $v['login_id'],
                    'password' => Hash::make($v['password']),
                ]);
        }
    }
}
