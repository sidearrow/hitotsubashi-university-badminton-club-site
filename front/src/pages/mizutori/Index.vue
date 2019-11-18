<template>
  <div>
    <h1 class="title-main">みずとり会のページ</h1>
    <div class="row mb-3 justify-content-end">
      <div class="col-md-3">
        <button class="btn btn-block btn-outline-secondary" @click="clickBtnLogout()">ログアウト</button>
      </div>
    </div>
    <section class="mb-5" v-for="(year, i) in data" :key="i">
      <h2 class="title-sub">{{ year.year }} 年度</h2>
      <div class="form-row">
        <div
          class="col-md-3 col-sm-4 col-6 py-1"
          v-for="(month, j) in year.files"
          :key="j"
        >
          <button
            class="btn btn-block btn-outline-main"
            @click="clickBtn(month.id, year.year)"
          >{{ month.title }}</button>
        </div>
      </div>
    </section>
    <b-alert
      v-model="showFailOpenFileAlert"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="warning"
      dismissible
    >ファイルを開けませんでした。</b-alert>
  </div>
</template>

<script>
import data from "./ob-messages.json";
import AuthService from '../../services/AuthService';
import StorageService from '../../services/StorageService';

export default {
  data: function() {
    return {
      data: data,
      showFailOpenFileAlert: false,
    };
  },
  methods: {
    clickBtn: async function(id, year) {
      try {
        const url = await StorageService.getDownloadURL(id, year);
        window.open(url);
      } catch (e) {
        this.showFailOpenFileAlert = true;
      }
    },
    clickBtnLogout: async function() {
      await AuthService.logout();
      this.$router.push("/mizutori/login");
    }
  }
};
</script>
