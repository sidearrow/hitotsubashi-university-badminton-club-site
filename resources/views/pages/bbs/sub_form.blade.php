<div class="mb-3">
  <label>タイトル</label>
  <input type="text" name="title" class="form-control" value="{{ old('title', $post['title'] ?? '') }}" />
  <span class="invalid-feedback d-inline">{{ $errors->first('title') }}</span>
</div>
<div class="mb-3">
  <label>投稿者</label>
  <input type="text" name="author" class="form-control" value="{{ old('author', $post['author'] ?? '') }}" />
  <span class="invalid-feedback d-inline">{{ $errors->first('author') }}</span>
</div>
<div class="mb-3">
  <label>本文</label>
  <textarea name="content" class="form-control" rows="10">{{ old('content', $post['content'] ?? '') }}</textarea>
  <span class="invalid-feedback d-inline">{{ $errors->first('content') }}</span>
</div>
<div class="mb-3">
  <label>パスワード</label>
  <input type="text" name="password" class="form-control" />
  <span class="invalid-feedback d-inline">{{ $errors->first('password') }}</span>
</div>
