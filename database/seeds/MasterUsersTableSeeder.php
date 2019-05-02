<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class MasterUsersTableSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['login_id' => 'mizutori', 'password' => Hash::make('password')],
            ['login_id' => 'admin', 'password' => Hash::make('password')],
        ];

        DB::table('master_users')->insert($data);
    }
}
