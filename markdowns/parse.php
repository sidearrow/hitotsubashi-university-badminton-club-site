<?php

require_once __DIR__ . '/../vendor/erusev/parsedown/Parsedown.php';

$targetDirPath = __DIR__ . '/league-results/league-results-201901-m.md';

$Parsedown = new Parsedown();

$data = file_get_contents($targetDirPath);

$html = $Parsedown->parse($data);

file_put_contents('test.html', $html);
