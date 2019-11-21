<?php
$menuArray = [
        [
            'text' => '部活情報',
            'path' => url('/about')
        ],
        [
            'text' => '部員情報',
            'path' => url('/member')
        ],
        [
            'text' => '大会結果',
            'path' => url('/result')
        ],
        [
            'text' => '三多摩大会',
            'path' => url('/santama')
        ],
        [
            'text' => '掲示板',
            'path' => url('/bbs')
        ],
        [
            'text' => 'みずとり会',
            'path' => url('/mizutori')
        ],
];
?>
<nav class="navbar navbar-light bg-white navbar-expand-md shadow fixed-top">
  <a class="navbar-brand" href="/" style="line-height: 1.3">
    <span>一橋大学</span>
    <br />
    <span>バドミントン部</span>
  </a>
  <button type="button" class="border-0 navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="ml-md-3 navbar-collapse collapse" id="navbarMenu">
    <ul class="navbar-nav mr-auto">
      @foreach ($menuArray as $menu)
      <li class="navbar-item">
        <a href="{{ $menu['path'] }}" class="nav-link">{{ $menu['text'] }}</a>
      </li>
      @endforeach
    </ul>
  <ul class="mt-md-0 mt-2 navbar-nav">
    <li>
      <a target="_blank" href="https://twitter.com/hit_u_bad" class="nav-link">
        <i class="icon-twitter font-size--1_5"></i>
        <span class="ml-2 font-size--1_1 align-top">Twitter</span>
      </a>
    </li>
    <!--
      <b-nav-item target="_blank" href="https://github.com/sidearrow/hit-u-bad">
        <i class="icon-github font-size--1_5"></i>
        <span class="ml-2 font-size--1_1 align-top">GitHub</span>
      </b-nav-item>
    -->
  </ul>
  </div>
</nav>
