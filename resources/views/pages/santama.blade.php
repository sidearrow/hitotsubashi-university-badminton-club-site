@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '三多摩大会' ]) @endcomponent
    <div>三多摩地区学生バドミントン選手権大会</div>
        <section class="mb-5">
            <p>第５２回三多摩地区学生バドミントン選手権大会</p>
        </section>
        <h3 class="h3">過去の大会結果</h3>
        <table class="table table-bordered">
            @foreach ($results as $i => $vYear)
                <tr>
                    <td class="align-middle bg-light text-center" rowspan="3" style="width:60px">{{ $i }}</td>
                    <td>
                        @foreach ($vYear as $v)
                            <a class="btn btn-sm btn-outline-primary mr-1" target="_blank" href="{{ $v['filename'] }}">{{ $v['name'] }}</a>
                        @endforeach
                    </td>
                </tr>
            @endforeach
        </table>
    </div>
@endsection
