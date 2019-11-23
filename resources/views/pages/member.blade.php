@extends('layouts.layout_main')

@section('main')
<h1 class="hub-h1">部員情報</h1>
<section>
  <ul class="nav nav-tabs nav-fill">
    <?php foreach ($data['members'] as $i => $v) : ?>
    <li class="nav-item">
      <a class="nav-item nav-link {{ $i === 0 ? 'active' : '' }}" data-toggle="tab" href="#tab{{ $i }}">{{ $v['grade'] }}年生</a>
    </li>
    <?php endforeach; ?>
  </ul>
  <div class="tab-content">
    @foreach ($data['members'] as $i => $grade)
    <div class="tab-pane fade show {{ $i === 0 ? 'active' : '' }}" id="tab{{ $i }}">
      <div class="form-row my-3">
        @foreach ($grade['members'] as $member)
        <div class="col-sm-6 py-2">
          <div class="card border-dark">
            <div class="card-body">
              <div class="h5 pb-1 {{ $member['gender'] === 0 ? 'text-info' : 'text-danger' }}">{{ $member['fullName'] }}
              </div>
              <div class="pb-1">
                <span class="border border-dark px-1 mb-1 mr-2 d-inline-block">{{ $member['faculty'] }}</span>
                <span class="border border-dark px-1 d-inline-block">{{ $member['highschool'] }}</span>
              </div>
              @if (count($member['positions']) > 0)
              <div class="pb-1">
                @foreach ($member['positions'] as $pos)
                <span class="border border-dark px-1 mr-1 mb-1 d-inline-block">{{ $pos }}</span>
                @endforeach
              </div>
              @endif
              <div class="pb-1">{{ $member['comment'] }}</div>
            </div>
          </div>
        </div>
        @endforeach
      </div>
    </div>
    @endforeach
  </div>
</section>
@endsection
