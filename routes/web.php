<?php

Route::get('/', 'IndexController');

Route::get('/about', 'About\IndexController');

Route::get('/members', 'Members\IndexController');

Route::get('/santama', 'Santama\IndexController');

Route::group([
    'prefix' => 'results',
    'namespace' => 'Results',
], function () {
    Route::get('/', 'IndexController');
    Route::get('/league', 'LeagueController');
});

Route::group([
    'prefix' => 'mizutori',
    'namespace' => 'Mizutori',
], function () {
    Route::group([
        'middleware' => 'authMizutori'
    ], function () {
        Route::get('/', 'IndexController');
    });

    Route::get('/login', 'LoginGetController');
    Route::post('/login', 'LoginPostController');
});
