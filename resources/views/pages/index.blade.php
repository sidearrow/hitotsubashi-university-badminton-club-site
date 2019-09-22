@extends('layouts.main')

@section('main')
<div>
  <div class="alert alert-main">
    <div>こちらは β 版です。<br />最新の情報は <a target="_blank" href="http://jfn.josuikai.net/circle/sports/badminton/index.html">こちら</a> からご確認下さい。</div>
  </div>
  <div class="jumbotron text-center bg-white px-1">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <img class="w-100" src="{{ url('/logo.svg') }}" />
      </div>
    </div>
    <h1 class="heading">一橋大学<br>バドミントン部</h1>
    <span class="font-italic">Hitotsubashi University Badminton Club was established in 1952.</span>
  </div>
</div>
@endsection
