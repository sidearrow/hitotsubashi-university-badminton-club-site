@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">みずとり会のページ</h1>
<div class="row mb-3 justify-content-end">
  <div class="col-md-3">
    <a class="btn btn-block btn-outline-secondary" href="{{ url('mizutori/logout') }}">ログアウト</a>
  </div>
</div>
@foreach($data as $year)
<h2 class="hub-h2">{{ $year['year'] }} 年度</h2>
<section class="mb-5">
  <div class="form-row">
    @foreach ($year['files'] as $month)
    <div class="col-md-3 col-sm-4 col-6 py-1">
      <a class="btn btn-block btn-outline-main" href="{{ url("mizutori/files/obmessages/{$month['fileName']}") }}" __target="blank">{{ $month['title'] }}</a>
    </div>
    @endforeach
  </div>
</section>
    @endforeach
@endsection
