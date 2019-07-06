@extends('layouts.main')

@section('content')
@component('components.title', ['title' => '投稿編集完了'])@endcomponent
<div class="alert alert-primary">編集が完了しました。</div>
<div class="row justify-content-center">
    <div class="col-4">
        <a href="{{ $backUrl }}" class="btn btn-outline-secondary btn-block">戻る</a>
    </div>
</div>
@endsection
