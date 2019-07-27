<?php

Route::get('/', 'IndexController');
Route::get('/members', 'MembersController');
Route::get('/santama', 'SantamaController');

Route::get('/results', 'ResultsController@index');
Route::get('/results/{resultId}', 'ResultsController@detail');

Route::get('/bbs', 'BbsController@index');

Route::get('/bbs/create-input', 'Bbs\CreateController@input');
Route::get('/bbs/create-confirm', 'Bbs\CreateController@confirm');
Route::get('/bbs/create-complete', 'Bbs\CreateController@complete');
Route::post('/bbs/create', 'Bbs\CreateController@create');

Route::get('/bbs/{postId}', 'BbsController@show');

Route::get('/bbs/{postId}/edit-input', 'Bbs\EditController@input');
Route::get('/bbs/{postId}/edit-confirm', 'Bbs\EditController@confirm');
Route::get('/bbs/{postId}/edit-complete', 'Bbs\EditController@complete');
Route::post('/bbs/{postId}/edit', 'Bbs\EditController@edit');

Route::post('/bbs/{postId}/delete', 'BbsController@delete');
Route::post('/bbs/{postId}/comment', 'BbsController@commentCreate');

Route::get('/mizutori', 'MizutoriController@index');
Route::get('/mizutori-login', 'MizutoriController@loginGet');
Route::post('/mizutori-login', 'MizutoriController@loginPost');

Route::get('/files/obmessages/{fileName}', 'FilesController@obmessages');

Route::get('/admin/login', 'Admin\IndexController@loginGet');
Route::post('/admin/login', 'Admin\IndexController@loginPost');
Route::group(['prefix' => 'admin', 'middleware' => 'authAdmin'], function () {
    Route::get('/', 'Admin\IndexController@index');

    Route::get('/top', 'Admin\TopController@index');
/*
    Route::get('/members', 'AdminMembersController@index');
    Route::post('/members/import', 'AdminMembersController@import');
    Route::get('/obmessages', 'AdminIndexController@obmessages');
    Route::post('/obmessages/create', 'AdminIndexController@obmessagesCreate');
    Route::post('/obmessages/delete', 'AdminIndexController@obmessagesDelete');
*/
});
