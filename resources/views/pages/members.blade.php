@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '部員紹介' ]) @endcomponent
@foreach ($members as $i => $membersYear)
    <div>{{ $i+1 }}年生</div>
    @foreach ($membersYear as $v)
        <div class="row py-3">
            <div class="col-auto">
                <img src="{{ $v['fileUrl'] }}" width="100" height="100" />
            </div>
            <div class="col pl-3">
                <div class="pb-3">{{ $v['fullName'] }}</div>
                <div class="py-2">
                    <span class="border border-dark rounded px-1 mb-1 mr-2 d-inline-block">{{ $v['faculty'] }}</span>
                    <span class="border border-dark rounded px-1 d-inline-block">{{ $v['highschool'] }}</span>
                </div>
                <div>
                    @foreach ($v['positions'] as $pos)
                        <span class="border border-dark rounded px-1 mr-1 mb-1 d-inline-block">{{ $pos }}</span>
                    @endforeach
                </div>
            </div>
        </div>
    @endforeach
@endforeach
@endsection
