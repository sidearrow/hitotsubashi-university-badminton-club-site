<!--nobanner-->
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8" />
  <title>一橋大学バドミントン部</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="google-site-verification" content="" />
  <meta name="description" content="一橋大学バドミントン部のホームページです" />
  <link rel="stylesheet" href="{{ asset('css/index.css') }}" />
</head>

<body class="bg-light">
  <header>
    @include('components.cmp_navbar')
  </header>
  <main class="container bg-white" style="max-width:{{ isset($mainWidthSmall) && $mainWidthSmall ? '540' : '720' }}px;">
    @yield('main')
  </main>
  <footer class="text-center"><small>(C) {{ date('Y') }} 一橋大学バドミントン部</small></footer>
  @include('components.cmp_xrea_ad')
  <script src="{{ asset('js/index.js') }}"></script>
</body>

</html>
