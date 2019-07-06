<?php
$menus = [
    [ '部員紹介', url('/members') ],
    [ '大会結果', url('/results') ],
    [ '三多摩大会', url('/santama') ],
    [ '掲示板', url('/bbs') ],
    [ 'みずとり会', url('/mizutori') ],
];
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
        <link rel="stylesheet" href="{{ asset('/css/vendor/fontawesome/all.min.css') }}" />
        <script src="{{ asset('/js/vendor/jquery/jquery-3.4.0.slim.min.js') }}"></script>
        <script src="{{ asset('/js/vendor/bootstrap/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('/js/vendor/fontawesome/all.min.js') }}"></script>
        <script src="{{ asset('/js/app/common.js') }}"></script>
        <style>html{font-size:12px;}.bg-hit{background-color:#ac2926;}</style>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark fixed-top" style="background-color:#ac2926">
                <div class="container" style="max-width:720px">
                    <a class="navbar-brand" href="{{ url('/') }}">一橋大学バドミントン部</a>
                    <div>a</div>
                    <div class="d-flex">
                        <div class="dropdown">
                            <a class="btn btn-transpalent dropdown-toggle text-white" data-toggle="dropdown" style="cursor:pointer">MENU</a>
                            <div class="dropdown-menu dropdown-menu-right">
                                @foreach ($menus as $menu)
                                    <a class="dropdown-item" href="{{ $menu[1] }}">{{ $menu[0] }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>
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
