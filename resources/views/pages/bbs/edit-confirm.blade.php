@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板 投稿編集確認' ]) @endcomponent
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">タイトル</div>
    <div class="col-sm-8 py-2">{{ $viewData->title }}</div>
</div>
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">投稿者名</div>
    <div class="col-sm-8 py-2">{{ $viewData->author }}</div>
</div>
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">投稿内容</div>
    <div class="col-sm-8 py-2">{{ $viewData->content }}</div>
</div>
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">編集/削除キー</div>
    <div class="col-sm-8 py-2">{{ $viewData->password }}</div>
</div>
<form method="post" action="{{ $viewData->formActionUrl }}">
    @csrf
    <input type="hidden" name="title" value="{{ $viewData->title }}" />
    <input type="hidden" name="author" value="{{ $viewData->author }}" />
    <input type="hidden" name="content" value="{{ $viewData->content }}" />
    <input type="hidden" name="password" value="{{ $viewData->password }}" />
    <div class="justify-content-center mt-3 row">
        <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">投稿</button>
        </div>
        <div class="col-4">
            <a href="{{ $viewData->backUrl }}" class="btn btn-outline-secondary btn-block">戻る</a>
        </div>
    </div>
</form>
@endsection
