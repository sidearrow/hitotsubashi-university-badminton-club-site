<?php

//Route::get('/', 'Index\Index');

use App\Http\Middleware\AuthMizutoriMiddleware;

Route::get('/', 'Index\IndexController');
Route::get('/about', 'About\IndexController');
Route::get('/member', 'Member\IndexController');

Route::get('/result', 'Result\IndexController');
Route::get('/result/league', 'Result\LeagueController');
Route::get('/result/league/{leagueId}', 'Result\LeagueDetailController');

Route::get('/santama', 'Santama\IndexController');

Route::get('/bbs', 'Bbs\IndexController');
/*
Route::get('/bbs/create', 'Bbs\CreateGetController');
Route::post('/bbs/create', 'Bbs\CreatePostController');
Route::get('/bbs/create-complete', 'Bbs\CreateCompleteController');

Route::post('/bbs/edit-auth', 'Bbs\EditAuthController');
Route::get('/bbs/edit/{bbsPostId}', 'Bbs\EditGetController');
Route::post('/bbs/edit/{bbsPostId}', 'Bbs\EditPostController');
Route::get('/bbs/edit-complete', 'Bbs\EditCompleteController');

Route::get('/bbs/list/{prop}/{dir}/{page}', 'Bbs\IndexController');
*/

Route::get('/mizutori/login', 'Mizutori\LoginController');
Route::post('/mizutori/login', 'Mizutori\LoginPostController');

Route::group(['middleware' => AuthMizutoriMiddleware::class], function () {
    Route::get('/mizutori', 'Mizutori\IndexController');
    Route::get('/mizutori/files/{dirName}/{fileName}', 'Mizutori\FileController');
    Route::get('/mizutori/logout', 'Mizutori\LogoutController');
});

Route::get('/admin', 'Admin\IndexController');
