@extends('layouts.main')

<?php debug($viewData); ?>

@section('content')
    @component('components.title', [ 'title' => 'みずとり会' ]) @endcomponent
    <div>
        <div class="h3">OB通信</div>
        @foreach ($viewData->obmessages as $i => $vYear)
            <div class="row my-2">
                <div class="bg-light col-sm-2 py-2 font-weight-bold">{{ $i }}</div>
                <div class="col-sm-10">
                @foreach ($vYear as $v)
                    <a class="btn btn-sm btn-outline-primary mr-2 my-1"
                       href="{{ $v['url'] }}" target="_blank">{{ $v['name'] }}</a>
                @endforeach
                </div>
            </div>
        @endforeach
    </div>
  </article>
@endsection
