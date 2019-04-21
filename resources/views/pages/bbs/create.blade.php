<form method="POST" action="create-confirm">
  @csrf
  title<input name="title" value="{{ old('title', '') }}" />
  author<input name="author" value="{{ old('author', '') }}" />
  content<input name="content" value="{{ old('content', '') }}" />
  password<input name="password" value="{{ old('password', '') }}" />
  <button type="submit">確認</button>
</form>
