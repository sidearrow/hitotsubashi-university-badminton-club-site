@extends('layouts.main')

@section('content')
@php
    $editUrl = url('bbs/' . $post->uuid . '/edit');
    $deleteUrl = url('bbs/' . $post->uuid . '/delete');
@endphp
<div class="h3">{{ $post->title }}</div>
<div class="text-right my-3">
    <a class="btn btn-outline-success mr-2 px-4"
       href="{{ $editUrl }}">編集</a>
    <a class="btn btn-outline-danger px-4"
       href="{{ $deleteUrl }}">削除</a>
</div>
<div class="mb-5">
    <span>{{ $post->author }}</span>
    <span class="ml-2 text-monospace">{{ $post->created_at }}</span>
</div>
<div class="ws-preline mb-3">{!! nl2br($post->content) !!}</div>
@endsection
