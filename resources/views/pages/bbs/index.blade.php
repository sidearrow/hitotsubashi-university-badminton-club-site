@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">掲示板</h1>
<p>試合の結果などをお知らせします。</p>
<section>
  <div class="alert alert-primary">
    <p>掲示板はこちらのリンクからご確認ください。</p>
    <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">新掲示板</a>
    <br />
    <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板</a>
  </div>
</section>
{{--
<div class="form-row justify-content-center mt-2">
  <div class="col-md-4">
    <a href="{{ url('bbs/create') }}" class="btn btn-block btn-outline-info">新規投稿</a>
  </div>
</div>
<section class="mt-2">
  @foreach($posts as $post)
  <div class="card mb-3">
    <div class="card-body">
      <h5>{{ $post['title'] }}</h5>
      <div>
        <span>{{ $post['author'] }}</span>
        <span className="ml-4 text-monospace text-secondary">{{ $post['createdAt'] }}</span>
      </div>
      <div class="text-right">
        <button class="btn btn-sm btn-outline-info">返信</a>
          <button class="ml-2 btn btn-sm btn-outline-info btn-bbs-post-edit" data-bbs-post-id="{{ $post['id'] }}" data-toggle="modal" data-target="#modalEditConfirm">編集</a>
            <button class="ml-2 btn btn-sm btn-outline-danger btn-bbs-post-delete" data-bbs-post-id="{{ $post['id'] }}" data-toggle="modal"
              data-target="#modalDeleteConfirm">削除</a>
      </div>
      <div class="mb-3" style="white-space:pre-wrap">{{ $post['content'] }}</div>
    </div>
  </div>
  @endforeach
</section>
<div class="mt-4">
  <ul class="pagination justify-content-center">
    @foreach ($paginationData['pageList'] as $page)
    @if($page === -1)
    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
    @else
    @if($page === $paginationData['pageNum'])
    <li class="page-item active"><a class="page-link" href="#">{{ $page }}</a></li>
    @else
    <li class="page-item"><a class="page-link" href="#">{{ $page }}</a></li>
    @endif
    @endif
    @endforeach
  </ul>
  <div class="text-secondary text-center">{{ $paginationData['metaText'] }}</div>
</div>
<div class="modal fade" id="modalEditConfirm">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">編集 パスワード入力</div>
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="POST" action="{{ url('bbs/edit-auth') }}" id="formBbsPostEdit">
          @csrf
          <input type="hidden" name="bbsPostId" id="editBbsPostIdInput" />
          <div class="form-row justify-content-center mt-2">
            <div class="col-md-8">
              <input type="password" name="password" class="form-control" placeholder="パスワード" />
              <span class="invalid-feedback" id="editInvalidFeedback"></span>
            </div>
          </div>
          <div class="form-row justify-content-center mt-2">
            <div class="col-md-4 col-6">
              <button type="submit" class="btn btn-block btn-info">編集</button>
            </div>
            <div class="col-md-4 col-6">
              <button type="button" class="btn btn-block btn-outline-secondary" data-dismiss="modal">キャンセル</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="modalDeleteConfirm">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">削除 パスワード入力</div>
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="POST" action="{{ url('bbs/delete') }}" id="formBbsPostDelete">
          @csrf
          <input type="hidden" name="bbsPostId" id="deleteBbsPostIdInput" />
          <div class="form-row justify-content-center mt-2">
            <div class="col-md-8">
              <input type="password" name="password" class="form-control" placeholder="パスワード" />
              <span class="invalid-feedback" id="deleteInvalidFeedback"></span>
            </div>
          </div>
          <div class="form-row justify-content-center mt-2">
            <div class="col-md-4 col-6">
              <button type="submit" class="btn btn-block btn-danger">削除</button>
            </div>
            <div class="col-md-4 col-6">
              <button type="button" class="btn btn-block btn-outline-secondary" data-dismiss="modal">キャンセル</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
--}}
@endsection

@section('script')
<script>
var elEditBbsPostIdInput = document.getElementById('editBbsPostIdInput');
var elDeleteBbsPostIdInput = document.getElementById('deleteBbsPostIdInput');
var elEditInvalidFeedback = document.getElementById('editInvalidFeedback');
var elDeleteInvalidFeedback = document.getElementById('deleteInvalidFeedback');
$('.btn-bbs-post-edit').click(function (e) {
  elEditBbsPostIdInput.value = e.target.getAttribute('data-bbs-post-id');
});
$('.btn-bbs-post-delete').click(function (e) {
  elDeleteBbsPostIdInput.value = e.target.getAttribute('data-bbs-post-id');
});
document.getElementById('formBbsPostEdit').addEventListener('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: e.target.action,
    type: e.target.method,
    data: $(this).serializeArray(),
  }).done(function (data) {
    window.location.href = data.nextUrl;
  });
});
document.getElementById('formBbsPostDelete').addEventListener('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: e.target.action,
    type: e.target.method,
    data: $(this).serializeArray(),
  });
});
</script>
@endsection
