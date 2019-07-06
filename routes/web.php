<?php

Route::get('/', 'IndexController');
Route::get('/members', 'MembersController');
Route::get('/santama', 'SantamaController');

Route::get('/results', 'ResultsController');

Route::get('/bbs', 'BbsController@index');

Route::get('/bbs/create', 'Bbs\CreateController@create');
Route::post('/bbs/create-confirm', 'Bbs\CreateController@confirm');
Route::get('/bbs/create-complete', 'Bbs\CreateController@completeGet');
Route::post('/bbs/create-complete', 'Bbs\CreateController@completePost');

Route::get('/bbs/{postId}', 'BbsController@show');

Route::get('/bbs/{postId}/edit', 'Bbs\EditController@index');
Route::post('/bbs/{postId}/edit-confirm', 'Bbs\EditController@confirm');
Route::get('/bbs/{postId}/edit-complete', 'Bbs\EditController@completeGet');
Route::post('/bbs/{postId}/edit-complete', 'Bbs\EditController@completePost');

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
