<div class="mb-3">
  <label>タイトル</label>
  <input type="text" name="title" class="form-control" maxlength="100" placeholder="100字以内" value="{{ old('title', $post['title'] ?? '') }}" />
  <span class="invalid-feedback d-inline">{{ $errors->first('title') }}</span>
</div>
<div class="mb-3">
  <label>投稿者</label>
  <input type="text" name="author" class="form-control" maxlength="100" placeholder="100字以内" value="{{ old('author', $post['author'] ?? '') }}" />
  <span class="invalid-feedback d-inline">{{ $errors->first('author') }}</span>
</div>
<div class="mb-3">
  <label>本文</label>
  <textarea name="content" class="form-control" rows="10" maxlength="2000" placeholder="2000字以内">{{ old('content', $post['content'] ?? '') }}</textarea>
  <span class="invalid-feedback d-inline">{{ $errors->first('content') }}</span>
</div>
<div class="mb-3">
  <label>パスワード</label>
  <input type="password" name="password" class="form-control" maxlength="4" placeholder="半角数字4字" />
  <span class="invalid-feedback d-inline">{{ $errors->first('password') }}</span>
</div>
