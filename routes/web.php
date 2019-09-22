<?php

Route::get('/', 'IndexController');

Route::get('/about', 'About\IndexController');

Route::get('/members', 'Members\IndexController');

Route::group(
    [
        'prefix' => 'mizutori',
        'namespace' => 'Mizutori',
    ],
    function () {
        Route::get('/', 'IndexController');

        Route::get('/login', 'LoginGetController');
        Route::post('/login', 'LoginPostController');
    }
);
