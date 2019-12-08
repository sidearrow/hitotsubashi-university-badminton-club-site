@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">掲示板 新規投稿完了</h1>
@include('pages.bbs.sub_complete', [
  'main'    => '投稿が完了しました。',
  'url'     => url('bbs'),
  'linkText' => '投稿一覧へ',
])
@endsection
