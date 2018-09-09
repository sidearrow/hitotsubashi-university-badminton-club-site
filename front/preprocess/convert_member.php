<?php
$filepath = __DIR__ . '/raw/member.csv';

$file = new SplFileObject($filepath);
$file->setFlags(SplFileObject::READ_CSV);

$data = [
    "1" => [],
    "2" => [],
    "3" => [],
    "4" => [],
];
$isFirst = true;
foreach ($file as $line) {
    if ($isFirst) {
        $isFirst = false;
        continue;
    }
    if ($line[0] === null) {
        continue;
    }

    $data[$line[0]][] = [
        "name"       => $line[1],
        "sx"         => $line[2],
        "gakubu"     => $line[3],
        "highschool" => $line[4],
        "prefecture" => $line[5],
        "position"   => explode(',', $line[6]),
    ];
}

$outputFilePath = __DIR__ . '/res/member.json';

file_put_contents($outputFilePath, json_encode($data, JSON_UNESCAPED_UNICODE));