@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '大会結果' ]) @endcomponent
<h3 class="h3">関東学生バドミントン連盟リーグ</h3>
<div>関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。</div>
<table class="table table-bordered my-3">
    <tbody>
        <tr>
            <td class="bg-light" colspan="2"></td>
            <td class="bg-light text-center">男子</td>
            <td class="bg-light text-center">女子</td>
        </tr>
        @foreach ($results as $i => $v)
            <tr>
                @if ($i === 0 || $v['season'] === '秋')
                    <td class="bg-light align-middle text-center" rowspan="{{ $v['season'] === '秋' ? '2' : '1' }}">{{ $v['year'] }}</td>
                @endif
                <td class="text-center bg-light">{{ $v['season'] }}</td>
                <td>{{ $v['m'] }}</td>
                <td>{{ $v['f'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
@endsection
