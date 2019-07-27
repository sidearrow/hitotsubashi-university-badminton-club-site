@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '掲示板 新規投稿' ]) @endcomponent
<form method="post" action="{{ url('/bbs/create') }}">
    @csrf

    @include('pages.bbs.sub_input')

    <div class="row justify-content-center">
        <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block" name="isConfirm" value="1">確認</button>
        </div>
        <div class="col-4">
            <a class="btn btn-outline-secondary btn-block" href="{{ url('/bbs') }}">戻る</a>
        </div>
    </div>

</form>
@endsection
