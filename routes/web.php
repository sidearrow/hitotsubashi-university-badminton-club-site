<?php

use App\Http\Controllers\{
    IndexController,
    MembersController,
    ResultsController,
    SantamaController,
    Bbs\BbsIndexController
};

Route::get('/', IndexController::class);
Route::get('/members', MembersController::class);
Route::get('/results', ResultsController::class);
Route::get('/santama', SantamaController::class);

Route::get('/bbs', BbsIndexController::class);
Route::get('/bbs/create', 'BbsController@create');
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
