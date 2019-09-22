@extends('layouts.main')

@section('main')
<ul class="nav nav-tabs">
  @foreach($membersData as $i => $v)
  <li class="nav-item">
    <a class="nav-link {{ $i === 0 ? 'active' : '' }}" data-toggle="tab" href="#tabContent{{ $i }}">{{ $v['grade'] }}年生</a>
  </li>
  @endforeach
</ul>
<div class="tab-content" id="myTabContent">
  @foreach($membersData as $i => $grade)
  <div class="tab-pane fade {{ $i === 0 ? 'show active' : '' }}" id="tabContent{{ $i }}">
    <div class="row mt-3">
      @foreach($grade['members'] as $member)
      <div class="col-lg-4 col-sm-6 py-2">
        <div class="card">
          <div class="card-body">
            <div class="h5 pb-1 {{ $member['gender'] === 0 ? 'text-info' : 'text-danger' }}">{{ $member['fullName'] }}</div>
            <div class="pb-1">
              <span class="border border-dark rounded px-1 mb-1 mr-2 d-inline-block">{{ $member['faculty'] }}</span>
              <span class="border border-dark rounded px-1 mb-1 d-inline-block">{{ $member['highschool'] }}</span>
            </div>
            <div class="pb-1">
              @foreach($member['positions'] as $pos)
              <span class="border border-dark rounded px-1 mb-1 mr-2 d-inline-block">{{ $pos }}</span>
              @endforeach
            </div>
            <div class="pb-1">{{ $member['comment'] }}</div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
  @endforeach
</div>
@endsection
