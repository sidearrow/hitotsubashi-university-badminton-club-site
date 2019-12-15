@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">関東学生バドミントン連盟リーグ</h1>
<div class="row justify-content-center">
  <div class="table-responsive col-md-9">
    <table class="table table-bordered">
      <thead class="bg-light">
        <tr>
          <th class="font-weight-normal" colspan="2">期</th>
          <th class="font-weight-normal">男子</th>
          <th class="font-weight-normal">女子</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($data as $i => $year)
        @foreach ($year['season'] as $j => $season)
        <tr>
          @if($j === 0)
          <th class="font-weight-normal bg-light align-middle" rowspan="{{ count($year['season']) }}">
            {{ $year['year'] }}</th>
          @endif
          <th class="font-weight-normal bg-light">{{ $season['season'] }}</th>
          <td>
            <span class="text-nowrap">
              @if($season['detailIdM'] !== null)
              <span class="mr-2"><a href="{{ url("result/league/{$season['detailIdM']}") }}">{{ $season['m'] }}</a></span>
              @else
              <span class="mr-2">{{ $season['m'] }}</span>
              @endif
              <span>
                <cmp-badge :flg="season.mFlg" />
              </span>
            </span>
          </td>
          <td>
            <span class="text-nowrap">
              <span class="mr-2">{{ $season['f'] }}</span>
              <span>
                <cmp-badge :flg="season.fFlg" />
              </span>
            </span>
          </td>
        </tr>
        @endforeach
        @endforeach
      </tbody>
    </table>
  </div>
</div>
@endsection
