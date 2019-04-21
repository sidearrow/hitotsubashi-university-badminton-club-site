<div>{{ old('title') }}</div>
<div>{{ old('author') }}</div>
<div>{{ old('content') }}</div>
<div>{{ old('password') }}</div>
<form method="post" action="create-complete">
  @csrf
  <input type="hidden" name="title" value="{{ old('title') }}" />
  <input type="hidden" name="author" value="{{ old('author') }}" />
  <input type="hidden" name="content" value="{{ old('content') }}" />
  <input type="hidden" name="password" value="{{ old('password') }}" />
  <button type="submit" name="submit" value="1">投稿</button>
  <button type="submit" name="return" value="1">戻る</button>
</form>
