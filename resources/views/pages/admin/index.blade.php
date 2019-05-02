@extends('layouts.admin')

@section('content')
<h2>管理画面</h2>
<div>一橋大学バドミントン部の管理画面です。</div>
<ul>
    <li><a href="{{ url('admin/obmessages') }}">OB通信</a></li>
</ul>
@endsection
