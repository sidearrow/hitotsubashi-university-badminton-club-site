<?php
$optionYear = range(2020, 2005, -1);
$optionMonth = range(1, 12);
?>
@extends('layouts.admin')

@section('content')
<h2 class="mb-5">OB通信</h2>
<div class="card mb-5">
    <div class="card-header">新規作成</div>
    <div class="card-body">
        <div class="alert alert-primary">
            <ul>
                <li>HP内では [年] 毎に [月/号] の昇順で表示されます</li>
                <li>[ファイル] は「obmessage_yyyymm」形式のPDFファイルを選択してください</li>
            </ul>
        </div>
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
                <select class="form-control" name="month">
                    @foreach ($optionMonth as $v)
                        <option>{{ $v }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group col-3">
                <label>表示名</label>
                <input type="text" class="form-control" name="name" maxlength="5" value="月号">
            </div>
            <div class="form-group col-5">
                <label>ファイル</label>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="file" accept=".pdf">
                    <label class="custom-file-label" for="file" data-browse="選択">ファイルを選択してください</label>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-primary px-5">新規作成</button>
        </div>
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
                <button class="btn btn-sm btn-outline-danger">削除</button>
            </td>
            <td class="text-right align-middle">{{ $v->year }}</td>
            <td class="text-right align-middle">{{ $v->month }}</td>
            <td class="align-middle">{{ $v->name }}</td>
            <td class="align-middle"><a href="{{ $getUrl($v->filename) }}" target="_blank">{{ $v->filename }}</a></td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
