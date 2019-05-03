<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class BbsPostsTableSeeder extends Seeder
{
    const FILE_PATH = __DIR__ . '/data/bbs_data.json';

    public function run()
    {
        $data = json_decode(file_get_contents(self::FILE_PATH));
        foreach($data as $v) {
            $parentId = uniqid();
            $id = DB::table('bbs_posts')
                ->insertGetId([
                    'id'         => $parentId,
                    'title'      => $v->title,
                    'author'     => $v->author,
                    'content'    => $v->content,
                    'password'   => Hash::make('1111'),
                    'created_at' => $this->formatDate($v->createdAt),
                    'updated_at' => $this->formatDate($v->updatedAt),
                ]);
            
            if (count($v->comments) === 0) {
                continue;
            }
            foreach($v->comments as $vc) {
                DB::table('bbs_posts')
                    ->insert([
                        'id'         => uniqid(),
                        'title'      => $v->title,
                        'author'     => $vc->author,
                        'content'    => $vc->content,
                        'password'   => Hash::make('1111'),
                        'parent_id'  => $parentId,
                        'created_at' => $this->formatDate($vc->createdAt),
                        'updated_at' => $this->formatDate($vc->updatedAt),
                    ]);
            }
        }
    }

    private function formatDate(string $dateString)
    {
        if ($dateString[4] === '/') {
            return Carbon::createFromFormat('Y/m/d H:i:s', $dateString);
        }

        return Carbon::createFromFormat('Y-m-d H:i:s', $dateString);
    }
}
