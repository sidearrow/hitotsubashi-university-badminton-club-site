@extends('layouts.layout_main')

@section('main')
    <h1 class="hub-h1">部活情報</h1>
    <h2 class="hub-h2">役職</h2>
    <section class="container mb-5">
        @foreach($position as $pos)
      <div class="row mb-1">
        <div class="col-4 col-sm-3 py-1 alert-main">{{ $pos['positionName'] }}</div>
        <div class="col-8 col-sm-9 py-1">{{ $pos['name'] }}</div>
      </div>
      @endforeach
    </section>
    <h2 class="hub-h2">練習場所</h2>
    <section class="mb-5">
      <div class="mb-2">一橋大学 小平国際キャンパス内 体育館</div>
      <div class="row justify-content-center">
        <div class="text-center col-md-6">
          <iframe :src="mapUrl" class="w-100" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <h2 class="hub-h2">練習時間</h2>
    <section class="mt-3">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <table class="table table-bordered">
            <thead>
              <tr class="alert-main">
                <th class="text-center"></th>
                <th class="text-center">授業期</th>
                <th class="text-center">休業期</th>
              </tr>
            </thead>
            <tbody>
                @foreach($practiceTime['label'] as $i => $label)
              <tr>
                <th class="text-center alert-main">{{ $label }}</th>
                <td class="text-center">{{ $practiceTime['default'][$i] ?? '-' }}</td>
                <td class="text-center">{{ $practiceTime['vacation'][$i] ?? '-' }}</td>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </section>
@endsection
