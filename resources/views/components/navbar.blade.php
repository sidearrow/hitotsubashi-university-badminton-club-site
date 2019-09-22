<nav class="navbar navbar-expand-md navbar-light bg-transparent border-bottom border-dark">
  <a class="navbar-brand" href="{{ url('/') }}">一橋大学<br />バドミントン部</a>
  <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarContent">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div id="navbarContent" class="collapse navbar-collapse">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="{{ url('about') }}">部活情報</a></li>
      <li class="nav-item"><a class="nav-link" href="{{ url('members') }}">部員情報</a></li>
      <li class="nav-item"><a class="nav-link" href="{{ url('result') }}">大会結果</a></li>
      <li class="nav-item"><a class="nav-link" href="{{ url('santama') }}">三多摩大会</a></li>
      <li class="nav-item"><a class="nav-link" href="{{ url('mizutori') }}">みずとり会</a></li>
    </ul>
    <!--
    <b-navbar-nav class="ml-auto mt-md-0 mt-2">
      <b-nav-item target="_blank" href="https://twitter.com/hit_u_bad">
        <i class="icon-twitter font-size--1_5"></i>
        <span class="ml-2 font-size--1_1 align-top">Twitter</span>
      </b-nav-item>
      <b-nav-item target="_blank" href="https://github.com/sidearrow/hit-u-bad">
        <i class="icon-github font-size--1_5"></i>
        <span class="ml-2 font-size--1_1 align-top">GitHub</span>
      </b-nav-item>
    </b-navbar-nav>
  -->
  </div>
</nav>
