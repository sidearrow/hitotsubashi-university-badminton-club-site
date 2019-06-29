@extends('layouts.main')

@section('content')
@component('components.title', [ 'title' => '部員紹介' ]) @endcomponent
@foreach ($viewData->members as $v1)
    <h3>{{ $v1['grade'] }}年生</h3>
    <div class="mb-5">
        @foreach ($v1['members'] as $v2)
            <div class="row py-3">
                <div class="col-auto">
                    <img src="{{ $v2['fileUrl'] }}" width="100" height="100" />
                </div>
                <div class="col pl-3">
                    <div class="pb-3 {{ $v2['sx'] === 'm' ? 'text-primary' : 'text-danger' }}">{{ $v2['fullName'] }}</div>
                    <div class="pb-2">
                        <span class="border border-dark rounded px-1 mb-1 mr-2 d-inline-block">{{ $v2['faculty'] }}</span>
                        <span class="border border-dark rounded px-1 d-inline-block">{{ $v2['highschool'] }}</span>
                    </div>
                    @if (count($v2['positions']) > 0)
                        <div class="pb-2">
                            @foreach ($v2['positions'] as $pos)
                                <span class="border border-dark rounded px-1 mr-1 mb-1 d-inline-block">{{ $pos }}</span>
                            @endforeach
                        </div>
                    @endif
                    <div class="pb-2">{{ $v2['comment'] }}</div>
                </div>
            </div>
        @endforeach
    </div>
@endforeach
@endsection
