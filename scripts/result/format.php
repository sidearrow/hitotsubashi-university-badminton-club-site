<?php
$filepath = __DIR__ . '/result.csv';

$file = new SplFileObject($filepath);
$file->setFlags(SplFileObject::READ_CSV);

$isFirst = true;
$data = [];
foreach ($file as $line) {
    if ($isFirst) {
        $isFirst = false;
        continue;
    }
    if ($line[0] === null) {
        continue;
    }

    $_m = '';
    if ($line[4] === '-1') {
        $_m = ' 降格';
    } else if ($line[4] === '1') {
        $_m = ' 昇格';
    }

    $_f = '';
    if ($line[7] === '-1') {
        $_f = ' 降格';
    } else if ($line[7] === '1') {
        $_f = ' 昇格';
    }

    $tmp = [
        'year'   => $line[0],
        'season' => $line[1],
        'm' => $line[2] . ' 部 ' . $line[3] . ' 位' . $_m,
        'f' => $line[5] . ' 部 ' . $line[6] . ' 位' . $_f,
    ];

    if ($line[0] === '2011' && $line[1] === '春') {
        $tmp = [
            'year'   => $line[0],
            'season' => $line[1],
            'm' => '中止',
            'f' => '中止',
        ];
    }

    $data[] = $tmp;
}

$outputFilePath = __DIR__ . '/result.json';

file_put_contents($outputFilePath, json_encode($data, JSON_UNESCAPED_UNICODE));