@extends('layouts.main')

@section('content')
<div class="h3">{{ $viewData->post->title }}</div>
<div class="text-right my-3">
    <button class="btn btn-outline-primary mr-2 px-4" data-toggle="modal" data-target="#editModal">編集</button>
    <button class="btn btn-outline-danger px-4" data-toggle="modal" data-target="#deleteModal">削除</button>
</div>
<div class="mb-5">
    <span>{{ $viewData->post->author }}</span>
    <span class="ml-2 text-monospace">{{ $viewData->post->created_at }}</span>
</div>
<div class="ws-preline mb-5">{!! nl2br($viewData->post->content) !!}</div>
<div class="text-center mb-3">
    <a class="btn btn-outline-primary mr-2 px-4" href="{{ url('bbs') }}">一覧へ戻る</a>
</div>
<div class="card my-5">
    <div class="card-header">コメント</div>
    <div class="card-body">
        @if (count($viewData->comments) === 0)
            <p>コメントはありません</p>
        @else
            @foreach ($viewData->comments as $comment)
                @if (!is_null($comment->deleted_at))
                    <div>コメントは削除されました</div>
                @else
                    <div>
                        <div>
                            <span>{{ $comment->author }}</span>
                            <span class="ml-2 text-monospace">{{ $comment->created_at }}</span>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#deleteCommentModal" data-post-id="{{ $comment->id }}">削除</button>
                        </div>
                        <div>{!! nl2br($comment->content) !!}</div>
                    </div>
                @endif
                <hr class="my-4" />
            @endforeach
        @endif
        <form method="post" action="{{ url('bbs/' . $viewData->postId . '/comment') }}">
            @csrf
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">名前</label>
                <div class="col-sm-10">
                    <input name="author" maxlength="100" value="{{ old('author') }}"
                           class="form-control form-control-sm {{ $errors->has('author') ? 'is-invalid' : '' }}">
                    @if ($errors->has('author'))
                        <div class="invalid-feedback">{{ $errors->first('author') }}</div>
                    @endif
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">削除キー</label>
                <div class="col-sm-10">
                    <input name="password" type="password" maxlength="4"
                           class="form-control form-control-sm {{ $errors->has('password') ? 'is-invalid' : '' }}">
                    @if ($errors->has('password'))
                        <div class="invalid-feedback">{{ $errors->first('password') }}</div>
                    @else
                        <small class="form-text text-muted">半角数字 4 桁で入力してください</small>
                    @endif
                </div>
            </div>
            <div class="form-group">
                <textarea name="content" rows="3" maxlength="1000" placeholder="コメントを入力してください"
                          class="form-control form-control-sm {{ $errors->has('content') ? 'is-invalid' : '' }}">{{ old('content') }}</textarea>
                @if ($errors->has('content'))
                    <div class="invalid-feedback">{{ $errors->first('content') }}</div>
                @endif
            </div>
            <div class="text-center mt-2">
                <button type="submit" class="btn btn-outline-primary px-4">投稿</button>
            </div>
        </form>
    </div>
</div>
<div class="modal fade" id="editModal" data-is-error="@if($errors->has('editPassword')){{'1'}}@endif">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿編集</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="get" action="{{ url('bbs/' . $viewData->postId . '/edit') }}">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label>編集キー</label>
                        <input type="hidden" name="postId" value="{{ $viewData->postId }}" />
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
<?php $errorsHasPostDeletePassword = old('isComment') !== '1' && $errors->has('deletePassword'); ?>
<div class="modal fade" id="deleteModal" data-is-error="{{ $errorsHasPostDeletePassword ? '1' : '' }}">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿削除</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" action="{{ url('bbs/' . $viewData->postId . '/delete') }}">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label>削除キー</label>
                        <input type="hidden" name="postId" value="{{ $viewData->postId }}" />
                        <input type="password" name="deletePassword" class="form-control {{ $errorsHasPostDeletePassword ? 'is-invalid' : '' }}" />
                        @if($errorsHasPostDeletePassword)
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
<?php $errorsHasCommentDeletePassword = old('isComment') === '1' && $errors->has('deletePassword'); ?>
<div class="modal fade" id="deleteCommentModal" data-is-error="{{ $errorsHasCommentDeletePassword ? '1' : '' }}">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">コメント削除</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label>削除キー</label>
                        <input type="hidden" name="postId" />
                        <input type="hidden" name="isComment" value="1" />
                        <input type="hidden" name="parentId" value="{{ $viewData->postId }}" />
                        <input type="password" name="deletePassword" class="form-control {{ $errorsHasCommentDeletePassword ? 'is-invalid' : '' }}" />
                        @if($errorsHasCommentDeletePassword)
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
document.addEventListener('DOMContentLoaded', function () {
    var baseUrl = '{{ url('/') }}';
    $editModal = $('#editModal');
    $editModal.attr('data-is-error') === '1' && $editModal.modal('show');
    $deleteModal = $('#deleteModal');
    $deleteModal.attr('data-is-error') === '1' && $deleteModal.modal('show');
    $commentDeleteModal = $('#deleteCommentModal');
    $commentDeleteModal.attr('data-is-error') === '1' && $commentDeleteModal.modal('show');

    $('button[data-post-id]').click(function () {
        var targetId = $(this).attr('data-post-id');
        $('#deleteCommentModal [name=postId]').val(targetId);
        $('#deleteCommentModal form').attr('action', baseUrl + '/bbs/' + targetId + '/delete');
    });
});
</script>
@endsection
