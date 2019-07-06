<?php
$menus = [
    [ '部員紹介', url('/members') ],
    [ '大会結果', url('/results') ],
    [ '三多摩大会', url('/santama') ],
    [ '掲示板', url('/bbs') ],
    [ 'みずとり会', url('/mizutori') ],
];

$urlGitHub = 'https://github.com/sidearrow/hit-u-bad';
$urlTwitter = 'https://twitter.com/hit_u_bad';

?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>一橋大学バドミントン部</title>

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />

        <meta name="description" content="一橋大学バドミントン部の HP です" />
        <meta name="author" content="sidearrow" />

        <link rel="stylesheet" href="{{ asset('/css/vendor/bootstrap/bootstrap.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('/css/vendor/fontawesome/css/all.min.css') }}" />
        <script src="{{ asset('/js/vendor/jquery/jquery-3.4.0.slim.min.js') }}"></script>
        <script src="{{ asset('/js/vendor/bootstrap/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('/js/vendor/fontawesome/all.min.js') }}"></script>
        <script src="{{ asset('/js/app/common.js') }}"></script>
        <style>html{font-size:12px;}.bg-hit{background-color:#ac2926;}</style>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand navbar-dark fixed-top" style="background-color:#ac2926">
                <div class="container" style="max-width:720px">
                    <a class="navbar-brand" href="{{ url('/') }}">一橋大学バドミントン部</a>
                    <ul class="navbar-nav flex-row" style="font-size:1.2rem">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ $urlTwitter }}" target="__blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ $urlGitHub }}" target="__blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown ml-3">
                            <a class="nav-item nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#">MENU</a>
                            <div class="dropdown-menu dropdown-menu-right">
                                @foreach ($menus as $menu)
                                    <a class="dropdown-item" href="{{ $menu[1] }}">{{ $menu[0] }}</a>
                                @endforeach
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="container-fluid" style="margin-top:100px;max-width:720px">@yield('content')</main>
        <footer class="footer py-5">
            <hr class="my-5 w-25">
            <section>
                <div class="text-center text-secondary">
                    <small>Copyright © 2019 一橋大学バドミントン部</small>
                </div>
            </section>
        </footer>
        @yield('script')
    </body>
</html>
