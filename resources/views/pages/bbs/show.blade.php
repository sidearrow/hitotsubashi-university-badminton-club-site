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
<div class="modal fade" id="editModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿編集</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>編集キー</label>
                    <input type="password" class="form-control" />
                    <small class="form-text text-muted">半角数字 4 字で入力してください</small>
                    <div class="invalid-feedback">編集キーが間違っています</div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary">編集</button>
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">キャンセル</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="deleteModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿削除</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>削除キー</label>
                    <input type="password" class="form-control" />
                    <small class="form-text text-muted">半角数字 4 字で入力してください</small>
                    <div class="invalid-feedback">削除キーが間違っています</div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger">削除</button>
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">キャンセル</button>
            </div>
        </div>
    </div>
</div>
<script>

</script>
@endsection
