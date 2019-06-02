<?php

use App\Http\Controllers\{
    IndexController,
    MembersController,
    ResultsController,
    SantamaController,
    Bbs\BbsIndexController,
    Bbs\BbsCreateController,
    Bbs\BbsCreateConfirmController,
    Bbs\BbsCreateCompleteGetController,
    Bbs\BbsCreateCompletePostController,
    Bbs\BbsShowController,
    Bbs\BbsEditController,
    Bbs\BbsEditConfirmController,
    Bbs\BbsEditCompleteGetController,
    Bbs\BbsEditCompletePostController,
    Bbs\BbsDeleteController,
    Bbs\BbsCommentCreateController
};

Route::get('/', IndexController::class);
Route::get('/members', MembersController::class);
Route::get('/results', ResultsController::class);
Route::get('/santama', SantamaController::class);

Route::get('/bbs', BbsIndexController::class);
Route::get('/bbs/create', BbsCreateController::class);
Route::post('/bbs/create-confirm', BbsCreateConfirmController::class);
Route::get('/bbs/create-complete', BbsCreateCompleteGetController::class);
Route::post('/bbs/create-complete', BbsCreateCompletePostController::class);
Route::get('/bbs/{id}', BbsShowController::class);
Route::get('/bbs/{id}/edit', BbsEditController::class);
Route::post('/bbs/{id}/edit-confirm', BbsEditConfirmController::class);
Route::get('/bbs/{id}/edit-complete', BbsEditCompleteGetController::class);
Route::post('/bbs/{id}/edit-complete', BbsEditCompletePostController::class);
Route::post('/bbs/{id}/delete', BbsDeleteController::class);
Route::post('/bbs/{id}/comment', BbsCommentCreateController::class);

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
