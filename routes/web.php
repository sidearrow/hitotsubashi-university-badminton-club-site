<?php

Route::get('/', 'IndexController');
Route::get('/members', 'MembersController');
Route::get('/results', 'ResultsController');
Route::get('/santama', 'SantamaController');

Route::get('/bbs', 'Bbs\BbsIndexController');
Route::get('/bbs/create', 'Bbs\BbsCreateController');
Route::post('/bbs/create-confirm', 'Bbs\BbsCreateConfirmController');
Route::get('/bbs/create-complete', 'Bbs\BbsCreateCompleteGetController');
Route::post('/bbs/create-complete', 'Bbs\BbsCreateCompletePostController');
Route::get('/bbs/{id}', 'Bbs\BbsShowController');
Route::get('/bbs/{id}/edit', 'Bbs\BbsEditController');
Route::post('/bbs/{id}/edit-confirm', 'Bbs\BbsEditConfirmController');
Route::get('/bbs/{id}/edit-complete', 'Bbs\BbsEditCompleteGetController');
Route::post('/bbs/{id}/edit-complete', 'Bbs\BbsEditCompletePostController');
Route::post('/bbs/{id}/delete', 'Bbs\BbsDeleteController');
Route::post('/bbs/{id}/comment', 'Bbs\BbsCommentCreateController');

Route::get('/mizutori', 'MizutoriController@index');
Route::get('/mizutori-login', 'MizutoriController@loginGet');
Route::post('/mizutori-login', 'MizutoriController@loginPost');

Route::get('/files/obmessages/{fileName}', 'FilesController@obmessages');

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
