<?php

setlocale(LC_ALL, 'ja_JP.UTF-8');

const INPUT_FILE_PATH = './league_results.csv';
const OUTPUT_FILE_PATH = './league_results.json';

const COL_YEAR = 0;
const COL_SEASON = 1;
const COL_M = 2;
const COL_M_FLAG = 3;
const COL_M_DETAIL = 4;
const COL_F = 5;
const COL_F_FLAG = 6;
const COL_F_DETAIL = 7;

$file = new SplFileObject(INPUT_FILE_PATH);
$file->setFlags(SplFileObject::READ_CSV);

$data = [];
foreach ($file as $i => $row) {
    if ($i === 0) {
        continue;
    }
    if ($row[0] === null) {
        break;
    }

    if ($row[COL_SEASON] === '1') {
        array_unshift($data, [
            'year' => $row[COL_YEAR],
            'season' => [],
        ]);
    }

    array_unshift($data[0]['season'], [
        'id'     => $row[COL_YEAR] . sprintf('%02d', $row[COL_SEASON]),
        'season' => $row[COL_SEASON] === '1' ? '春' : '秋',
        'm'      => $row[COL_M],
        'f'      => $row[COL_F],
        'mFlg'   => (int) $row[COL_M_FLAG],
        'fFlg'   => (int) $row[COL_F_FLAG],
    ]);
}

file_put_contents(OUTPUT_FILE_PATH, json_encode($data, JSON_UNESCAPED_UNICODE));
