@extends('layouts.main')

@section('content')
@component('components.title', ['title' => '投稿編集完了'])@endcomponent
<div class="alert alert-primary">編集が完了しました。</div>
<div class="text-center">
  <a href="{{ $backUrl }}" class="btn btn-outline-primary px-4">戻る</a>
</div>
@endsection
