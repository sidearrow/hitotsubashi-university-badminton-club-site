<?php

return [
    'defaults' => [
        'guard' => 'user',
        'passwords' => 'master_users',
    ],
    'guards' => [
        'user' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        'bbsPost' => [
            'driver' => 'session',
            'provider' => 'bbsPosts',
        ],
    ],
    'providers' => [
        'users' => [
            'driver' => 'database',
            'table' => 'master_users',
        ],
        'bbsPosts' => [
            'driver' => 'database',
            'table' => 'bbs_posts',
        ],
    ],
];
