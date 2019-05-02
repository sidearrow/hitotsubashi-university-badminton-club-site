<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>一橋大バド部HP - 管理画面</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
        <script src="{{ asset('/js/jquery-3.4.0.slim.min.js') }}"></script>
        <script src="{{ asset('/js/bootstrap.bundle.min.js') }}"></script>
        <style>html { font-size: 12px; font-family: arial,sans-serif; }</style>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark bg-dark mb-4">
                <a class="navbar-brand" href="{{ url('/admin') }}">一橋大バド部HP 管理画面</a>
                <div class="d-flex">
                    <div class="dropdown text-white">
                        <a class="btn btn-transpalent dropdown-toggle" data-toggle="dropdown" style="cursor:pointer">MENU</a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="/admin">aa</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main class="container-fluid" style="max-width:960px">@yield('content')</main>
        <footer class="footer py-5">
            <hr class="my-5 w-25">
            <section>
                <div class="text-center text-secondary">
                    <small>Copyright © 2018 一橋大学バドミントン部</small>
                </div>
            </section>
        </footer>
        <script src="{{ asset('/js/admin.js') }}"></script>
    </body>
</html>
