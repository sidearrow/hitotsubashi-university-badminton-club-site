@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板 新規投稿' ]) @endcomponent
<form method="post" action="{{ $viewData->formActionUrl }}">
    @csrf
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">タイトル</label>
        <div class="col-sm-10">
            <input class="form-control form-control {{ $viewData->form->title->isError ? 'is-invalid' : '' }}"
                   name="title" value="{{ $viewData->form->title->value }}"
                   maxlength="50"
            >
            <div class="invalid-feedback">{{ $viewData->form->title->errorMessage }}</div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">投稿者名</label>
        <div class="col-sm-10">
            <input class="form-control form-control {{ $viewData->form->author->isError ? 'is-invalid' : '' }}"
                   name="author" value="{{ $viewData->form->author->value }}"
                   maxlength="50"
            >
            <div class="invalid-feedback">{{ $viewData->form->author->errorMessage }}</div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">投稿内容</label>
        <div class="col-sm-10">
            <textarea class="form-control form-control {{ $viewData->form->content->isError ? 'is-invalid' : '' }}"
                      rows="15" maxlength="2000" name="content"
            >{{ $viewData->form->content->value }}</textarea>
            <div class="invalid-feedback">{{ $viewData->form->content->errorMessage }}</div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">編集/削除キー</label>
        <div class="col-sm-10">
            <input type="password" maxlength="4"
                   class="form-control form-control {{ $viewData->form->password->isError ? 'is-invalid' : '' }}"
                   name="password"
            >
            <div class="invalid-feedback">{{ $viewData->form->password->errorMessage }}</div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">確認</button>
        </div>
        <div class="col-4">
            <a class="btn btn-outline-secondary btn-block" href="{{ $viewData->backUrl }}">戻る</a>
        </div>
    </div>
</form>
@endsection
