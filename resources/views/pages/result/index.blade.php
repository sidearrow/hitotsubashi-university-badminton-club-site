@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">大会結果</h1>
<div class="form-row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header alert-secondary">関東学生バドミントン連盟リーグ</div>
            <div class="card-body">
                <div>関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。</div>
                    <div class="text-center mt-4">
                        <a href="{{ url('/result/league') }}" class="stretched-link">結果を見る</a>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 mt-md-0 mt-3">
        <div class="card">
            <div class="card-header alert-secondary">東商戦</div>
            <div class="card-body text-center py-5">準備中</div>
        </div>
    </div>
    <div class="col-md-6 mt-3">
        <div class="card">
            <div class="card-header alert-secondary">三商戦</div>
            <div class="card-body text-center py-5">準備中</div>
        </div>
    </div>
</div>
@endsection
