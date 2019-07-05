<?php

Route::get('/', 'IndexController');
Route::get('/members', 'MembersController');
Route::get('/santama', 'SantamaController');

Route::get('/results', 'ResultsController');
Route::get('/results/{id}', 'ResultsDetailController');

Route::get('/bbs', 'BbsController@index');

Route::get('/bbs/create', 'BbsController@create');
Route::post('/bbs/create-confirm', 'BbsController@createConfirm');
Route::get('/bbs/create-complete', 'BbsController@createCompleteGet');
Route::post('/bbs/create-complete', 'BbsController@createCompletePost');

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

/*
Route::get('/admin/login', 'AdminIndexController@loginGet');
Route::post('/admin/login', 'AdminIndexController@loginPost');
Route::group(['prefix' => 'admin', 'middleware' => 'authAdmin'], function () {
    Route::get('/', 'AdminIndexController@index');
    Route::get('/members', 'AdminMembersController@index');
    Route::post('/members/import', 'AdminMembersController@import');
    Route::get('/obmessages', 'AdminIndexController@obmessages');
    Route::post('/obmessages/create', 'AdminIndexController@obmessagesCreate');
    Route::post('/obmessages/delete', 'AdminIndexController@obmessagesDelete');
});
*/
