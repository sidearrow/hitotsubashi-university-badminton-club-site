<template>
  <div>
    <h1 class="mb-5">みずとり会のページ</h1>
    <div class="card mb-3" v-for="(year, i) in data" :key="i">
      <div class="card-header alert-main">{{ year.year }} 年度</div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6 py-1" v-for="(month, j) in year.files" :key="j">
            <button class="btn btn-block btn-outline-main" @click="clickBtn(month.id)">{{ month.title }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './ob-messages.json'
import obmessages from '@/firebase/obmessages'

export default {
  data: function() {
    return {
      data: data
    };
  },
  methods: {
    clickBtn: async function (id) {
      window.open(await obmessages.getDownloadURL(id))
    }
  }
};
</script>
