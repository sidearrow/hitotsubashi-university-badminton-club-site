<div class="form-group row">
    <label class="col-sm-2 col-form-label">タイトル</label>
    <div class="col-sm-10">
        <input class="form-control form-control {{ $errors->has('title') ? 'is-invalid' : '' }}"
               name="title" value="{{ old('title') }}"
               maxlength="50"
        >
        <div class="invalid-feedback">{{ $errors->first('title') }}</div>
    </div>
</div>

<div class="form-group row">
    <label class="col-sm-2 col-form-label">投稿者名</label>
    <div class="col-sm-10">
        <input class="form-control form-control {{ $errors->has('author') ? 'is-invalid' : '' }}"
               name="author" value="{{ old('author') }}"
               maxlength="50"
        >
        <div class="invalid-feedback">{{ $errors->first('author') }}</div>
    </div>
</div>

<div class="form-group row">
    <label class="col-sm-2 col-form-label">投稿内容</label>
    <div class="col-sm-10">
        <textarea class="form-control form-control {{ $errors->has('content') ? 'is-invalid' : '' }}"
                  rows="15" maxlength="2000" name="content"
        >{{ old('content') }}</textarea>
        <div class="invalid-feedback">{{ $errors->first('content') }}</div>
    </div>
</div>

<div class="form-group row">
    <label class="col-sm-2 col-form-label">編集/削除キー</label>
    <div class="col-sm-10">
        <input type="password" maxlength="4"
               class="form-control form-control {{ $errors->has('password') ? 'is-invalid' : '' }}"
               name="password"
        >
        <div class="invalid-feedback">{{ $errors->first('password') }}</div>
    </div>
</div>
