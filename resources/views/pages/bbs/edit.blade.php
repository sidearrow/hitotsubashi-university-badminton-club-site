@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">掲示板 編集</h1>
<form method="post" action="{{ url('bbs/edit') }}">
  @csrf
  @include('pages.bbs.sub_form')
  <div class="form-row justify-content-center mt-4">
    <div class="col-md-3 col-6">
      <button type="button" class="btn btn-block btn-info" data-toggle="modal" data-target="#modalConfirm">投稿</button>
    </div>
    <div class="col-md-3 col-6">
      <a href="{{ url()->previous() }}" class="btn btn-block btn-outline-secondary">戻る</a>
    </div>
  </div>
  <div class="modal fade" id="modalConfirm">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">保存確認</h5>
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>保存しますか</p>
          <div class="form-row justify-content-center mt-2">
            <div class="col-md-4 col-6">
              <button type="submit" class="btn btn-block btn-info">保存</button>
            </div>
            <div class="col-md-4 col-6">
              <button type="button" class="btn btn-block btn-outline-secondary" data-dismiss="modal">キャンセル</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
@endsection
