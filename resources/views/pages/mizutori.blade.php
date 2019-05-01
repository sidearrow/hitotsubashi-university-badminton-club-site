@extends('layouts.main')

@section('content')
    @component('components.title', [ 'title' => 'みずとり会' ]) @endcomponent
    <div>
        <div class="h3">OB通信</div>
        <div class="row my-2">
        @foreach ($obmsgs as $i => $vYear)
            <div class="bg-light col-sm-2 py-2 font-weight-bold">{{ $i }}</div>
            <div class="col-sm-10">
            @foreach ($vYear as $v)
                <button class="btn btn-sm btn-outline-primary mr-2 my-1">{{ $v['name'] }}</button>
            @endforeach
            </div>
        @endforeach
        </div>
    </div>
  </article>
@endsection
