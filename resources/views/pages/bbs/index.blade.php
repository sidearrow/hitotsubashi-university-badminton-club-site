@extends('layouts.main')

@section('content')
<div>
  <p>試合の結果などをお知らせします。</p>
  <section class="mb-3">
    <p>
      <a href="{{ url('/bbs/create') }}">新規投稿</a>
    </p>
    <ul>
      <li><a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a></li>
      <li><a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a></li>
    </ul>
  </section>
  <div>
    @foreach ($posts as $post)
      <div v-for="(v, i) in posts" :key="i" class="mb-4">
        <div><a href="{{ url('bbs/' . $post->uuid) }}">{{ $post->title }}</a></div>
        <div class="mt-2" style="font-size:0.8rem">
          <div>
            <span>by {{ $post->author }}</span>
            <span class="ml-4 text-monospace text-secondary">{{ $post->created_at }}</span>
          </div>
        </div>
      </div>
    @endforeach
  </div>
</div>
@endsection
