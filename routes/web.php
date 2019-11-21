<?php

//Route::get('/', 'Index\Index');
Route::get('/', 'Index\IndexController');
Route::get('/about', 'About\IndexController');
Route::get('/member', 'Member\IndexController');

Route::get('/result', 'Result\IndexController');
Route::get('/result/league', 'Result\LeagueController');

Route::get('/santama', 'Santama\IndexController');

Route::get('/mizutori', 'Mizutori\IndexController');
Route::get('/mizutori/login', 'Mizutori\LoginController');
Route::post('/mizutori/login', 'Mizutori\LoginPostController');
Route::post('/mizutori/file', 'Mizutori\FileController');
