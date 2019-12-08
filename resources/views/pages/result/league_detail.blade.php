@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">{{ $data->title }}</h1>
<h2 class="hub-h2">順位</h2>
<section>
  <table class="table table-bordered">
    <?php foreach($data->rank as $rank) : ?>
    <tr>
      <td class="alert-main">{{ $rank->rank }} 位</td>
      <td>{{ $rank->callageName }}</td>
      <td>{{ $rank->winMatches . ' 勝 ' . $rank->loseMatches . ' 敗' }}</td>
    </tr>
    <?php endforeach; ?>
  </table>
</section>
<h2 class="hub-h2 mt-5">組合せ</h2>
<section>
  <div class="table-responsive">
    <table class="table table-bordered">
      <tr class="alert-main">
        <td></td>
        @foreach($data->callageList as $v)
        <td style="width: {{ 100 / (count($data->callageList) + 2) }}%" class="text-center text-nowrap">{{ $v }}
        </td>
        @endforeach
        <td class="text-nowrap">順位</td>
      </tr>
      @foreach($data->result as $i => $v)
      <tr>
        <td class="alert-main text-nowrap">{{ $data->callageList[$i] ?? '' }}</td>
        @foreach($v as $d)
        <td class="text-nowrap">{{ $d }}</td>
        @endforeach
      </tr>
      @endforeach
    </table>
  </div>
</section>
<h2 class="hub-h2 mt-5">詳細</h2>
<section class="row justify-content-center">
  @foreach ($data->detail as $detail)
  <div class="col-md-6">
    <table class="table table-bordered">
      <tr class="alert-main">
        <td colspan="4">{{ $detail->title }}</td>
      </tr>
      @foreach ($detail->matches as $match)
      <tr>
        <td class="text-nowrap align-middle">
          @foreach ($match->player as $player)
          <div>{{ $player }}</div>
          @endforeach
        </td>
        <td class="text-nowrap align-middle text-center">{{ $match->get }}</td>
        <td class="text-nowrap text-center align-middle">
          @foreach($match->sets as $set)
          <div>{{ $set[0] }} - {{ $set[1] }}</div>
          @endforeach
        </td>
        <td class="text-nowrap align-middle text-center">{{ $match->lose }}</td>
      </tr>
      @endforeach
    </table>
  </div>
  @endforeach
</section>
@endsection
