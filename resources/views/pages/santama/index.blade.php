@extends('layouts.main')

@section('main')
<h1 class="mb-5">三多摩地区学生バドミントン選手権大会</h1>
<h2 class="mb-3">第 53 回大会 （2019 年度）</h2>
<section>準備中</section>
<h2 class="mt-5 mb-3">過去の結果</h2>
<div class="alert alert-info mt-3">別ウィンドウで PDF ファイルが開きます</div>
<section>
  @foreach ($results as $vYear)
  <div class="card mt-3">
    <div class="card-header alert-main">{{ $vYear['year'] }} 年度</div>
    <div class="card-body">
      <div class="row">
        @foreach($vYear['files'] as $vFile)
        <div class="col-md-3 col-6 py-1">
          <a class="btn btn-block btn-outline-main" target="_blank" href="{{ asset('files/santama_results/' . $vFile['file']) }}">{{ $vFile['title'] }}</a>
        </div>
        @endforeach
      </div>
    </div>
  </div>
  @endforeach
</section>
@endsection
