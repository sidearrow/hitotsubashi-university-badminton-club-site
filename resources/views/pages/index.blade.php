@extends('layouts.main')

@section('content')
    <div class="alert alert-warning">
        <div>こちらは β 版です。</div>
        <span>最新の情報は <a href="http://jfn.josuikai.net/circle/sports/badminton/" target="__blank">こちら</a> からご確認下さい。</span>
    </div>
    <div id="topImagesCaruosel" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            @foreach ($viewData->topImages as $i => $v)
                <div class="carousel-item {{ $i === 0 ? 'active' : '' }}">
                    <img src="{{ $v }}" class="d-block w-100">
                </div>
            @endforeach
        </div>
        <a class="carousel-control-prev" href="#topImagesCaruosel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#topImagesCaruosel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div class="mt-5">
        <h3 class="h3">部活紹介</h3>
        <div style="white-space:pre-line">{{ $viewData->introWording }}</div>
    </div>
    <div class="card mt-5">
        <div class="card-header bg-hit text-white">Twitter</div>
        <div class="card-body">
            <div class="mt-3">
                <a class="twitter-timeline" data-lang="ja" data-theme="light" data-height="600" href="https://twitter.com/hit_u_bad?ref_src=twsrc%5Etfw">Tweets by hit_u_bad</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    </div>
@endsection
