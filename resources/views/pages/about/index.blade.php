@extends('layouts.main')

@section('main')
<h1 class="mb-5">部活情報</h1>
<h2 class="mb-3">役職</h2>
<section>
  <table class="table table-bordered">
    <tr>
      <th class="alert-main font-weight-normal">部長</th>
      <td>髙橋 真弓</td>
    </tr>
    <tr>
      <th class="alert-main font-weight-normal">監督</th>
      <td>小原 貴文</td>
    </tr>
    <tr>
      <th class="alert-main font-weight-normal">コーチ</th>
      <td>中山 朋子</td>
    </tr>
    <tr>
      <th class="alert-main font-weight-normal">主将</th>
      <td>村山 康平</td>
    </tr>
    <tr>
      <th class="alert-main font-weight-normal">女子主将</th>
      <td>植木 さやか</td>
    </tr>
    <tr>
      <th class="alert-main font-weight-normal">主務</th>
      <td>佐藤 和貴</td>
    </tr>
  </table>
</section>
<h2 class="mt-5 mb-3">練習場所</h2>
<div>小平国際キャンパス体育館</div>
<div class="text-center">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12957.441488774683!2d139.46829484086692!3d35.71735473297284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e69b620ced03%3A0xf68c4deae0feda0c!2z5LiA5qmL5aSn5a2mIOWwj-W5s-Wbvemam-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1566569776838!5m2!1sja!2sjp" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
<h2 class="mt-5">練習時間</h2>
<section class="mt-3">
  <div class="row">
    <div class="col-lg-8">
      <table class="table table-bordered">
        <thead>
          <tr class="alert-main">
            <th class="text-center font-weight-normal"></th>
            <th class="text-center font-weight-normal">授業期</th>
            <th class="text-center font-weight-normal">休業期</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($practiceTime['day'] as $i => $v)
          <tr>
            <th class="text-center alert-main font-weight-normal">{{ $v }}</th>
            <td class="text-center">{{ $practiceTime['default'][$i] ?? '-' }}</td>
            <td class="text-center">{{ $practiceTime['vacation'][$i] ?? '-' }}</td>
          </tr>
          @endforeach
        </tbody>
        <tfoot>
          <tr class="bg-light">
            <th class="font-weight-normal text-center">備考</th>
            <td>{{ $practiceTime['defaultRemarks'] }}</td>
            <td>{{ $practiceTime['vacationRemarks'] }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>
@endsection
