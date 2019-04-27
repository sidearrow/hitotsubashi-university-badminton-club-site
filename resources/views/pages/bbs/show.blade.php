@extends('layouts.main')

@section('content')
<div class="h3">{{ $post->title }}</div>
<div class="text-right my-3">
    <button class="btn btn-outline-primary mr-2 px-4" data-toggle="modal" data-target="#editModal">編集</button>
    <button class="btn btn-outline-danger px-4" data-toggle="modal" data-target="#deleteModal">削除</button>
</div>
<div class="mb-5">
    <span>{{ $post->author }}</span>
    <span class="ml-2 text-monospace">{{ $post->created_at }}</span>
</div>
<div class="ws-preline mb-3">{!! nl2br($post->content) !!}</div>
<div class="modal fade" id="editModal" data-is-error="@if($errors->has('editPassword')){{'1'}}@endif">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿編集</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" action="{{ url('bbs/' . $id . '/edit') }}">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label>編集キー</label>
                        <input type="hidden" name="postId" value="{{ $id }}" />
                        <input type="password" name="editPassword" class="form-control @if($errors->has('editPassword')){{'is-invalid'}}@endif" />
                        @if ($errors->has('editPassword'))
                            <div class="invalid-feedback">{{ $errors->first('editPassword') }}</div>
                        @else
                            <small class="form-text text-muted">半角数字 4 字で入力してください</small>
                        @endif
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-outline-primary px-4">編集</button>
                    <button type="button" class="btn btn-outline-secondary px-4" data-dismiss="modal">キャンセル</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade" id="deleteModal" data-is-error="@if($errors->has('deletePassword')){{'1'}}@endif">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿削除</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" action="{{ url('bbs/' . $id . '/delete') }}">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label>削除キー</label>
                        <input type="hidden" name="postId" value="{{ $id }}" />
                        <input type="password" name="deletePassword" class="form-control @if($errors->has('deletePassword')){{'is-invalid'}}@endif" />
                        @if($errors->has('deletePassword'))
                            <div class="invalid-feedback">{{ $errors->first('deletePassword') }}</div>
                        @else
                            <small class="form-text text-muted">半角数字 4 字で入力してください</small>
                        @endif
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-outline-danger">削除</button>
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">キャンセル</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
$(function () {
    $editModal = $('#editModal');
    $editModal.attr('data-is-error') === '1' && $editModal.modal('show');
    $deleteModal = $('#deleteModal');
    $deleteModal.attr('data-is-error') === '1' && $deleteModal.modal('show');
});
</script>
@endsection
