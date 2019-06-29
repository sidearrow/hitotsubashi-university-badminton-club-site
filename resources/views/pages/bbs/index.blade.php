<?php
/**
 * @var \App\ViewModels\Bbs\BbsIndexViewModel $viewModel 
 */
?>

@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板' ])
@endcomponent
<div>
    <p>試合の結果などをお知らせします。</p>
    <section class="mb-3">
        <div class="alert alert-primary">
            <p>旧掲示板はこちらになります。</p>
            <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a><br/>
            <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a>
        </div>
        <div class="text-center py-2">
            <a href="{{ url('/bbs/create') }}" class="btn btn-outline-primary px-4">新規投稿</a>
        </div>
    </section>
    <div class="card mb-5">
        <div class="card-header">検索</div>
        <div class="card-body">
            <form method="get">
                <div class="form-group row">
                    <div class="input-group col-auto" style="width:150px">
                        <select class="form-control" name="searchYear">
                            <option></option>
                            @foreach ($viewModel::SEARCH_YEAR_LIST as $v)
                                <option @if($viewModel->searchYear === $v) selected @endif>{{ $v }}</option>
                            @endforeach
                        </select>
                        <div class="input-group-append">
                            <span class="input-group-text">年</span>
                        </div>
                    </div>
                    <div class="input-group col-auto" style="width:120px">
                        <select class="form-control" name="searchMonth">
                            <option></option>
                            @foreach ($viewModel::SEARCH_MONTH_LIST as $v)
                                <option @if($viewModel->searchMonth === $v) selected @endif>{{ $v }}</option>
                            @endforeach
                        </select>
                        <div class="input-group-append">
                            <span class="input-group-text">月</span>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-outline-primary">検索</button>
                </div>
            </form>
        </div>
    </div>
    <div>
        @foreach ($viewModel->posts as $post)
            <div class="mb-4">
                <div><a href="{{ url('bbs/' . $post->id) }}">{{ $post->title }}</a></div>
                <div class="mt-2">
                    <div>
                        <span>by {{ $post->author }}</span>
                        <span class="ml-4 text-monospace text-secondary">{{ $post->created_at }}</span>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <ul class="pagination justify-content-center pb-5">
        @foreach ($viewModel->pageList as $v)
            <li class="page-item {{ ($v == $viewModel->nowPage || $v === -1) ? 'disabled' : '' }}">
                <a class="page-link" href="{{ $viewModel->getUrlByPageNum($v) }}">{{ $v === -1 ? '...' : $v }}</a>
            </li>
        @endforeach
    </ul>
</div>
@endsection
