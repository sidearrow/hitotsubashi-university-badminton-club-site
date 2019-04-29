@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板 新規投稿' ]) @endcomponent
<form method="post" action="{{ url('bbs/create-confirm') }}">
    @csrf
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">タイトル</label>
        <div class="col-sm-10">
            <input class="form-control form-control {{ $errors->has('title') ? 'is-invalid' : '' }}"
                   name="title" value="{{ old('title') }}"
                   maxlength="50"
            >
            @if ($errors->has('title'))
                <div class="invalid-feedback">{{ $errors->first('title') }}</div>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">投稿者名</label>
        <div class="col-sm-10">
            <input class="form-control form-control {{ $errors->has('author') ? 'is-invalid' : '' }}"
                   name="author" value="{{ old('author') }}"
                   maxlength="50"
            >
            @if ($errors->has('author'))
                <div class="invalid-feedback">{{ $errors->first('author') }}</div>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">投稿内容</label>
        <div class="col-sm-10">
            <textarea class="form-control form-control {{ $errors->has('content') ? 'is-invalid' : '' }}"
                      rows="15" maxlength="2000" name="content"
            >{{ old('content') }}</textarea>
            @if ($errors->has('content'))
                <div class="invalid-feedback">{{ $errors->first('content') }}</div>
            @endif
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">編集/削除キー</label>
        <div class="col-sm-10">
            <input type="password" maxlength="4"
                   class="form-control form-control {{ $errors->has('password') ? 'is-invalid' : '' }}"
                   name="password"
            >
            @if ($errors->has('password'))
                <div class="invalid-feedback">{{ $errors->first('password') }}</div>
            @endif
        </div>
    </div>
    <div class="text-center mt-5">
      <button type="submit" class="btn btn-outline-primary px-5">確認</button>
      <a class="btn btn-outline-secondary px-5 ml-2" href="{{ url('bbs') }}">戻る</a>
    </div>
</form>
@endsection
