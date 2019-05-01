@extends('layouts.main')

@section('content')
    @component('components.title', [ 'title' => 'みずとり会 ログイン' ]) @endcomponent
    <div>
        <div>みずとり会のページです。<br/>コンテンツを見るにはログインしてください。</div>
        <div class="col-sm-8 offset-sm-2 mt-5">
            <form method="post" action="{{ url('/mizutori-login') }}">
                @csrf
                <div class="form-group">
                    <label>パスワード</label>
                    <input type="password" name="password" class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}" />
                    @if ($errors->has('password'))
                        <div class="invalid-feedback">{{ $errors->first('password') }}</div>
                    @else
                        <small class="form-text text-muted">現会長の名前をローマ字表記・英小文字のみで入力してください</small>
                    @endif
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-outline-primary px-4">ログイン</button>
                </div>
            </form>
        </div>
    </div>
@endsection
