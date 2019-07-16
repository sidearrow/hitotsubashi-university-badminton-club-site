@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '大会結果' ]) @endcomponent
<h3>順位</h3>
<div>
    @foreach ($viewData->results->rank as $i => $rank)
        <div class="row">
            <div class="col-2">{{ $i + 1 }} 位</div>
            <div class="col-5">{{ $rank->univName }}</div>
            <div class="col-5">{{ $rank->winNum . ' 勝 ' . $rank->loseNum . ' 負' }}</div>
        </div>
    @endforeach
</div>
<section class="mt-5">
    <h3>対戦表</h3>
    <div style="overflow-x:auto;">
        <table class="table table-sm table-bordered">
            <thead class="bg-light">
                <tr>
                    <th></th>
                    @foreach ($viewData->results->table->univList as $univ)
                        <th>{{ $univ }}</th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                @foreach ($viewData->results->table->content as $i1 => $v1)
                    <tr>
                        <th class="bg-light">{{ $viewData->results->table->univList[$i1] }}</th>
                        @foreach ($v1 as $i2 => $v2)
                            @if($i1 === $i2)
                                <td class="text-center">-</td>
                            @endif
                            <td class="text-center">{{ $v2 }}</td>
                        @endforeach
                        @if(count($viewData->results->table->univList) - 1 === $i1)
                            <td class="text-center">-</td>
                        @endif
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</section>
@endsection
