<template>
  <div>
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item"><span class="nav-link active" @click="click" data-grade="1">1</span></li>
      <li class="nav-item"><span class="nav-link" @click="click" data-grade="2">2</span></li>
      <li class="nav-item"><span class="nav-link" @click="click" data-grade="3">3</span></li>
      <li class="nav-item"><span class="nav-link" @click="click" data-grade="4">4</span></li>
    </ul>
    <div class="row">
      <div class="col-6 col-lg-4" v-for="member in members">
        <div class="card mb-3 px-1">
          <div class="card-body p-2">
            <h5 class="card-title">{{ member.name }}</h5>
            <p>{{ member.dep }}</p>
            <p>{{ member.from }}</p>
            <p>{{ member.intro }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberData from './MemberData.js';

export default {
  data () {
    return {
      members: MemberData[1],
    }
  },
  methods: {
    click: function(event) {
      this.members = MemberData[event.target.getAttribute('data-grade')];
      document.querySelector('.nav-link.active').classList.remove('active');
      event.target.classList.add('active');
    },
  }
};
</script>