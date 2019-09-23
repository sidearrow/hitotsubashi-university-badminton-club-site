@extends('layouts.main')

@section('main')
<h1 class="mb-5">みずとり会のページ</h1>
<div class="row mb-3 justify-content-end">
  <div class="col-md-2">
    <a class="btn btn-block btn-outline-secondary" href="{{ url('mizutori/logout') }}">ログアウト</a>
  </div>
</div>
@foreach ($data as $k => $vYear)
<div class="card mb-3">
  <div class="card-header alert-main">{{ $k }} 年度</div>
  <div class="card-body">
    <div class="row">
      @foreach($vYear as $vMonth)
      <div class="col-lg-2 col-md-3 col-sm-4 col-6 py-1">
        <a class="btn btn-block btn-outline-main" target="_blank" href="{{ url('mizutori/ob-messages/' . $vMonth['filename']) }}">{{ $vMonth['name'] }}</a>
      </div>
      @endforeach
    </div>
  </div>
</div>
@endforeach

@endsection
