<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item"><span class="nav-link active" @click="click">1</span></li>
      <li class="nav-item"><span class="nav-link" @click="click">2</span></li>
      <li class="nav-item"><span class="nav-link" @click="click">3</span></li>
      <li class="nav-item"><span class="nav-link" @click="click">4</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'aaa',
    }
  },
  methods: {
    click: function(e) {
      document.querySelector('.nav-link.active').classList.remove('active');
      e.currentTarget.classList.add('active');
    },
  }
};
</script>