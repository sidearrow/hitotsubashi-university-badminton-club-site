@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板 投稿編集' ]) @endcomponent
<form method="post" action="{{ url('/bbs/' . $postId . '/edit') }}">
    @csrf

    <input type="hidden" name="postId" value="{{ $postId }}" />

    @include('pages.bbs.sub_input')

    <div class="mt-5 row justify-content-center">
        <div class="col-4">
            <button type="submit" class="btn btn-block btn-outline-primary">確認</button>
        </div>
        <div class="col-4">
            <a class="btn btn-block btn-outline-secondary" href="{{ url('/bbs/' . $postId) }}">戻る</a>
        </div>
    </div>
</form>
@endsection

@section('script')
<script>
    beforeUnloadEvent();
</script>
@endsection
