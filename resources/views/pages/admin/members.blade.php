@extends('layouts.admin')

@section('content')
<h2 class="mb-5 text-center">部員紹介</h2>
<div class="card mb-3">
    <div class="card-header">データ取込</div>
    <div class="card-body">
        <form method="post" action="{{ url('admin/members/import') }}" enctype="multipart/form-data">
            @csrf
            <div class="custom-file mb-3">
                <input type="file" class="custom-file-input {{ $errors->has('file') ? 'is-invalid' : '' }}" id="file" name="file" accept=".csv">
                <label class="custom-file-label" for="file" data-browse="選択">ファイルを選択してください</label>
                @if($errors->has('file'))
                    <div class="invalid-feedback">{{ $errors->first('file') }}</div>
                @endif
            </div>
            <div class="text-center" data-toggle="modal" data-target="#editModal">
                <button class="btn btn-outline-primary px-5">取込</button>
            </div>
        </form>
    </div>
</div>
<div class="table-responsive">
    <table class="table table-sm table-bordered">
        <thead>
            <tr>
                <th class="bg-light" style="width:60px">入学年度</th>
                <th class="bg-light" style="width:60px">姓</th>
                <th class="bg-light" style="width:60px">名</th>
                <th class="bg-light" style="width:40px">性別</th>
                <th class="bg-light" style="width:80px">学部</th>
                <th class="bg-light" style="width:120px">高校</th>
                <th class="bg-light" style="width:80px">都道府県</th>
                <th class="bg-light" style="width:80px">役職</th>
                <th class="bg-light" style="width:240px">コメント</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($members as $v)
            <tr>
                <td>{{ $v->admission_year }}</td>
                <td>{{ $v->last_name }}</td>
                <td>{{ $v->first_name }}</td>
                <td>{{ $v->sx }}</td>
                <td>{{ $v->faculty }}</td>
                <td>{{ $v->highschool }}</td>
                <td>{{ $v->highschool_prefecture }}</td>
                <td>{{ $v->position }}</td>
                <td>{{ $v->comment }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
