<?php

Route::get('/', 'MainController@index');
Route::get('/members', 'MainController@members');
Route::get('/results', 'MainController@results');
Route::get('/santama', 'MainController@santama');
//Route::get('/mizutori', '');
//Route::get('/mizutori/login', '');

Route::get('/bbs', 'BbsController@index');
Route::get('/bbs/create', 'BbsController@create');
//Route::post('/bbs/create', 'BbsController@create');
Route::post('/bbs/create-confirm', 'BbsController@createConfirm');
Route::get('/bbs/create-complete', 'BbsController@createCompleteGet');
Route::post('/bbs/create-complete', 'BbsController@createCompletePost');
Route::get('/bbs/{id}', 'BbsController@show');
Route::match(['get', 'post'], '/bbs/{id}/edit', 'BbsController@edit');
Route::post('/bbs/{id}/edit-confirm', 'BbsController@editConfirm');
Route::get('/bbs/{id}/edit-complete', 'BbsController@editCompleteGet');
Route::post('/bbs/{id}/edit-complete', 'BbsController@editCompletePost');
Route::post('/bbs/{id}/ajax-auth', 'BbsController@editAuthAjax');
Route::post('/bbs/{id}/delete', 'BbsController@delete');
