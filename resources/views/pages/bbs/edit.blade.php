@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板 投稿編集' ]) @endcomponent
<form method="POST" action="edit-confirm">
    @csrf
    <div class="form-group">
        <label>タイトル</label>
        <input class="form-control form-control @if ($errors->has('title')) is-invalid @endif"
               name="title" value="{{ old('title', $post->title) }}"
               maxlength="50"
        >
        @if ($errors->has('title'))
            <div class="invalid-feedback">{{ $errors->first('title') }}</div>
        @endif
    </div>
    <div class="form-group">
        <label>名前</label>
        <input class="form-control form-control @if ($errors->has('author')) is-invalid @endif"
               name="author" value="{{ old('author', $post->author) }}"
               maxlength="50"
        >
        @if ($errors->has('author'))
            <div class="invalid-feedback">{{ $errors->first('author') }}</div>
        @endif
    </div>
    <div class="form-group">
        <label>本文</label>
        <textarea class="form-control form-control @if ($errors->has('content')) is-invalid @endif"
                  rows="10" maxlength="2000"
                  name="content" value="{{ old('content', $post->content) }}"
        ></textarea>
        @if ($errors->has('content'))
            <div class="invalid-feedback">{{ $errors->first('content') }}</div>
        @endif
    </div>
    <div class="form-group">
        <label>パスワード</label>
        <input type="password" maxlength="4"
               class="form-control form-control"
               name="password"
        >
        @if ($errors->has('password'))
            <div class="invalid-feedback">{{ $errors->first('password') }}</div>
        @endif
    </div>
    <button type="submit">確認</button>
</form>
@endsection
