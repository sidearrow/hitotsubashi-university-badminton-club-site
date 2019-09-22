@extends('layouts.main')

@section('main')
<h1>関東学生バドミントン連盟リーグ</h1>
<div class="table-responsive mt-5">
  <table class="table table-bordered">
    <thead class="bg-light">
      <tr>
        <th class="font-weight-normal" colspan="2">期</th>
        <th class="font-weight-normal">男子</th>
        <th class="font-weight-normal">女子</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($results as $vYear)
      @foreach ($vYear['season'] as $iSeason => $vSeason)
      <tr>
        @if($iSeason === 0)
        <th class="font-weight-normal bg-light align-middle" rowspan="{{ count($vYear['season']) }}">{{ $vYear['year'] }}</th>
        @endif
        <th class="font-weight-normal bg-light">{{ $vSeason['season'] }}</th>
        <td>
          <span>{{ $vSeason['m'] }}</span>
          @if($vSeason['mFlg'] === 1)
          <span class="border border-main rounded text-main px-2 py-1 ml-3">昇格</span>
          @endif
          @if($vSeason['mFlg'] === -1)
          <span class="border border-secondary rounded text-secondary px-2 py-1 ml-3">降格</span>
          @endif
        </td>
        <td>
          <span>{{ $vSeason['f'] }}</span>
          @if($vSeason['fFlg'] === 1)
          <span class="border border-main rounded text-main px-2 py-1 ml-3">昇格</span>
          @endif
          @if($vSeason['fFlg'] === -1)
          <span class="border border-secondary rounded text-secondary px-2 py-1 ml-3">降格</span>
          @endif
        </td>
      </tr>
      @endforeach
      @endforeach
    </tbody>
  </table>
</div>
@endsection
