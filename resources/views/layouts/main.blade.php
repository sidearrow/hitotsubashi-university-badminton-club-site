<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>一橋大学バドミントン部</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="google-site-verification" content="{{ config('app.google_site_verification') }}" />
    <meta name="description" content="一橋大学バドミントン部のホームページです" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400|Roboto:400&display=swap" />
    <link rel="stylesheet" href="{{ asset('assets/style.min.css') }}" />
    <style>html{font-size:13px}</style>
  </head>
  <body>
    <header>@include('components.navbar')</header>
    <main class="container py-5">@yield('main')</main>
    <script src="{{ asset('assets/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/bootstrap/bootstrap.bundle.min.js') }}"></script>
  </body>
</html>
