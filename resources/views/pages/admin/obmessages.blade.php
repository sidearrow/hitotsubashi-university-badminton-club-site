<?php
$optionYear = range(2020, 2005, -1);
$optionMonth = range(1, 12);
?>
@extends('layouts.admin')

@section('content')
<h2 class="mb-5">OB通信</h2>
@if(session('isCreateDone') === '1')
    <div class="alert alert-success alert-dismissible fade show">
        <div>新規作成が完了しました。</div>
        <button type="button" class="close" data-dismiss="alert">
          <span>&times;</span>
        </button>
    </div>
@endif
@if(session('isDeleteDone') === '1')
    <div class="alert alert-success alert-dismissible fade show">
        <div>削除が完了しました。</div>
        <button type="button" class="close" data-dismiss="alert">
          <span>&times;</span>
        </button>
    </div>
@endif
<div class="card mb-5">
    <div class="card-header">新規作成</div>
    <div class="card-body">
        <div class="alert alert-primary">
            <ul>
                <li>HP内では [年] 毎に [月/号] の昇順で表示されます</li>
                <li>[月/号], [表示名] は [年] 毎に一意の値を入力してください</li>
                <li>[ファイル] は 2MB 以下の PDF ファイルを選択してください (ファイル名はシステム内で自動的にリネームされます)</li>
            </ul>
        </div>
        <form method="post" action="{{ url('admin/obmessages/create') }}" enctype="multipart/form-data">
            @csrf
            <div class="form-row">
                <div class="form-group col-2">
                    <label>年</label>
                    <select class="form-control" name="year">
                        @foreach ($optionYear as $v)
                            <option>{{ $v }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group col-2">
                    <label>月/号</label>
                    <select class="form-control {{ $errors->has('month') ? 'is-invalid' : '' }}" name="month">
                        @foreach ($optionMonth as $v)
                            <option>{{ $v }}</option>
                        @endforeach
                    </select>
                    @if($errors->has('month'))
                        <div class="invalid-feedback">{{ $errors->first('month') }}</div>
                    @endif
                </div>
                <div class="form-group col-3">
                    <label>表示名</label>
                    <input type="text" class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" name="name" maxlength="5" value="月号">
                    @if($errors->has('name'))
                        <div class="invalid-feedback">{{ $errors->first('name') }}</div>
                    @endif
                </div>
                <div class="form-group col-5">
                    <label>ファイル</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input {{ $errors->has('file') ? 'is-invalid' : '' }}" id="file" name="file" accept=".pdf">
                        <label class="custom-file-label" for="file" data-browse="選択">ファイルを選択してください</label>
                        @if($errors->has('file'))
                            <div class="invalid-feedback">{{ $errors->first('file') }}</div>
                        @endif
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-outline-primary px-5">新規作成</button>
            </div>
        </form>
    </div>
</div>
<table class="table table-sm table-bordered table-responsive" style="border:0">
    <thead>
        <tr class="bg-light">
            <th style="width:60px"></th>
            <th style="width:60px">年</th>
            <th style="width:60px">月/号</th>
            <th style="width:100px">表示名</th>
            <th style="width:180px">ファイル</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($obmessages as $v)
        <tr>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-danger button-delete" data-id="{{ $v->id }}" data-toggle="modal" data-target="#deleteModal">削除</button>
            </td>
            <td class="text-right align-middle">{{ $v->year }}</td>
            <td class="text-right align-middle">{{ $v->month }}</td>
            <td class="align-middle">{{ $v->name }}</td>
            <td class="align-middle"><a href="{{ $getUrl($v->filename) }}" target="_blank">{{ $v->filename }}</a></td>
        </tr>
        @endforeach
    </tbody>
</table>
<div class="modal fade" id="deleteModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">削除確認</div>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <form method="post" action="{{ url('admin/obmessages/delete') }}">
                @csrf
                <input type="hidden" name="id">
                <div class="modal-footer">
                    <button type="submit" class="btn btn-outline-danger">削除</button>
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">キャンセル</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="{{ asset('/js/admin-obmessages.js') }}"></script>
@endsection
