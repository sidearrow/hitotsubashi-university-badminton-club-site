<?php

Route::get('/', 'MainController@index');
Route::get('/members', 'MainController@members');
Route::get('/results', 'MainController@results');
Route::get('/santama', 'MainController@santama');

Route::get('/bbs', 'BbsController@index');
Route::get('/bbs/create', 'BbsController@create');
//Route::post('/bbs/create', 'BbsController@create');
Route::post('/bbs/create-confirm', 'BbsController@createConfirm');
Route::get('/bbs/create-complete', 'BbsController@createCompleteGet');
Route::post('/bbs/create-complete', 'BbsController@createCompletePost');
Route::get('/bbs/{id}', 'BbsController@show');
Route::get('/bbs/{id}/edit', 'BbsController@edit');
Route::post('/bbs/{id}/edit-confirm', 'BbsController@editConfirm');
Route::get('/bbs/{id}/edit-complete', 'BbsController@editCompleteGet');
Route::post('/bbs/{id}/edit-complete', 'BbsController@editCompletePost');
Route::post('/bbs/{id}/delete', 'BbsController@delete');
Route::post('/bbs/{id}/comment', 'BbsController@commentCreate');

Route::get('/mizutori', 'MizutoriController@index');
Route::get('/mizutori-login', 'MizutoriController@loginGet');
Route::post('/mizutori-login', 'MizutoriController@loginPost');

Route::get('/files/obmessages/{fileName}', 'FileController@obmessages');
