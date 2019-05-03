@extends('layouts.admin')

@section('content')
<h2>部員紹介</h2>
<div class="text-center mb-5" data-toggle="modal" data-target="#editModal">
    <button class="btn btn-outline-primary px-5">新規作成</button>
</div>
<table class="table table-sm table-bordered" style="width:400px">
    <thead>
        <tr>
            <th class="bg-light" style="width:100px"></th>
            <th class="bg-light" style="width:120px"></th>
            <th class="bg-light" style="width:70px">入学年度</th>
            <th class="bg-light" style="width:70px">姓</th>
            <th class="bg-light" style="width:70px">名</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($members as $v)
        <tr>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-primary">▲</button>
                <button class="btn btn-sm btn-outline-primary">▼</button>
            </td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#editModal" data-id="{{ $v->id }}">編集</button>
                <button class="btn btn-sm btn-outline-danger">削除</button>
            </td>
            <td>{{ $v->admission_year }}</td>
            <td>{{ $v->first_name }}</td>
            <td>{{ $v->last_name }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
<div class="modal" id="editModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">投稿編集</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <input type="hidden" name="id">
                    <div class="form-group row">
                        <label class="col-3 col-form-label">入学年度</label>
                        <div class="col-9">
                            <select class="form-control" name="admissionYear">
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-3 col-form-label">姓</label>
                        <div class="col-9">
                            <input class="form-control {{ $errors->has('content') ? 'is-invalid' : ''}}"
                                   name="firstName" value="{{ old('content', '') }}" max-length="5" />
                            @if ($errors->has('content'))
                                <div class="invalid-feedback">{{ $errors->first('content') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-3 col-form-label">名</label>
                        <div class="col-9">
                            <input class="form-control {{ $errors->has('content') ? 'is-invalid' : ''}}"
                                   name="lastName" value="{{ old('content', '') }}" max-length="5" />
                            @if ($errors->has('content'))
                                <div class="invalid-feedback">{{ $errors->first('content') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-3 col-form-label">学部</label>
                        <div class="col-9">
                            <select class="form-control" name="faculty">
                                <option>商学部</option>
                                <option>経済学部</option>
                                <option>法学部</option>
                                <option>社会学部</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-3 col-form-label">出身高校</label>
                        <div class="col-9">
                            <input class="form-control {{ $errors->has('content') ? 'is-invalid' : ''}}"
                                   name="content" value="{{ old('content', '') }}" />
                            @if ($errors->has('content'))
                                <div class="invalid-feedback">{{ $errors->first('content') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-3 col-form-label">役職</label>
                        <div class="col-9">
                            <input class="form-control {{ $errors->has('content') ? 'is-invalid' : ''}}"
                                   name="position" value="{{ old('content', '') }}" />
                            @if ($errors->has('content'))
                                <div class="invalid-feedback">{{ $errors->first('content') }}</div>
                            @endif
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-outline-primary px-4">編集</button>
                <button type="button" class="btn btn-outline-secondary px-4" data-dismiss="modal">キャンセル</button>
            </div>
        </div>
    </div>
</div>
@endsection
