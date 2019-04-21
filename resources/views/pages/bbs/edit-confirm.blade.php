@extends('layouts.main')

@section('content')
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">タイトル</div>
    <div class="col-sm-8 py-2">{{ old('title') }}</div>
</div>
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">投稿者名</div>
    <div class="col-sm-8 py-2">{{ old('author') }}</div>
</div>
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">投稿内容</div>
    <div class="col-sm-8 py-2">{!! nl2br(old('content')) !!}</div>
</div>
<div class="row py-2">
    <div class="bg-light col-sm-4 py-2 font-weight-bold">編集/削除キー</div>
    <div class="col-sm-8 py-2">{{ old('password') }}</div>
</div>
<form method="post" action="edit-complete">
    @csrf
    <input type="hidden" name="title" value="{{ old('title') }}" />
    <input type="hidden" name="author" value="{{ old('author') }}" />
    <input type="hidden" name="content" value="{{ old('content') }}" />
    <input type="hidden" name="password" value="{{ old('password') }}" />
    <div class="text-center mt-3">
        <button type="submit" name="submit" value="1" class="btn btn-outline-primary px-4">投稿</button>
        <button type="submit" name="return" value="1" class="btn btn-outline-secondary px-4">戻る</button>
    </div>
</form>
@endsection
