@extends('layouts.layout_main', ['mainWidthSmall' => true])

@section('main')
<h1 class="hub-h1">みずとり会 ログイン</h1>
<form method="POST" action="{{ url('mizutori/login') }}">
  @csrf
  <div class="alert alert-info mb-5">コンテンツを見るにはログインしてください。</div>
  <div class="form-group">
    <label>パスワード</label>
    <input type="password" name="password" class="form-control {{ $errors->has('password') }}" />
    <div class="invalid-feedback">{{ $errors->first('password') }}</div>
    <small>現会長の名前をローマ字表記・英小文字のみで入力してください</small>
  </div>
  <div class="row justify-content-center mt-3">
    <div class="col-md-4">
      <button type="submit" class="btn btn-block btn-outline-dark">ログイン</button>
    </div>
  </div>
</form>
@endsection
