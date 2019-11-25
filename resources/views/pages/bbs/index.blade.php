@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">掲示板</h1>
<p>試合の結果などをお知らせします。</p>
<section class="mb-3">
  <div class="alert alert-primary">
    <p>掲示板はこちらのリンクからご確認ください。</p>
    <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">新掲示板</a>
    <br />
    <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板</a>
  </div>
</section>
<section>
  @foreach($posts as $post)
  <div class="card mb-3">
    <div class="card-body">
      <h5>{{ $post['title'] }}</h5>
      <div class="mb-3">{{ $post['contentShort'] }}</div>
      <div>
        <span>{{ $post['author'] }}</span>
        <span className="ml-4 text-monospace text-secondary">{{ $post['createdAt'] }}</span>
      </div>
    </div>
  </div>
  @endforeach
</section>
@endsection
