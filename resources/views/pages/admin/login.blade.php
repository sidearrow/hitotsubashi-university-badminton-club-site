@extends('layouts.admin')

@section('content')
<h2>管理画面 ログイン</h2>
<div>一橋大学バドミントン部の管理画面です。</div>
<div class="col-sm-8 offset-sm-2 mt-5">
    <form method="post" action="{{ url('/admin/login') }}">
        @csrf
        <div class="form-group">
            <label>パスワード</label>
            <input type="password" name="password" class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}" />
            @if ($errors->has('password'))
                <div class="invalid-feedback">{{ $errors->first('password') }}</div>
            @endif
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-outline-primary px-5">ログイン</button>
        </div>
    </form>
</div>
@endsection
