@extends('layouts.main')

@section('content')
@component('components.title', ['title' => '投稿編集完了'])@endcomponent
<div class="alert alert-primary">投稿が完了しました。</div>
<div class="row justify-content-center">
    <div class="col-4">
        <a href="{{ url('bbs') }}" class="btn btn-outline-secondary btn-block">戻る</a>
    </div>
</div>
@endsection
