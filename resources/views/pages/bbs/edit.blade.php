<div>編集</div>
<form method="POST" action="edit-confirm">
  @csrf
  title<input name="title" value="{{ old('title', $post->title) }}" />
  author<input name="author" value="{{ old('author', $post->author) }}" />
  content<input name="content" value="{{ old('content', $post->content) }}" />
  password<input name="password" value="{{ old('password') }}" />
  <button type="submit">確認</button>
</form>
