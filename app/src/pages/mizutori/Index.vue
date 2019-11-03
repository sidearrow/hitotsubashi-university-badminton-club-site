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
          class="col-lg-2 col-md-3 col-sm-4 col-6 py-1"
          v-for="(month, j) in year.files"
          :key="j"
        >
          <button
            class="btn btn-block btn-outline-main"
            @click="clickBtn(month.id)"
          >{{ month.title }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from "./ob-messages.json";
import obmessages from "@/firebase/obmessages";
import mizutoriAuth from "@/firebase/mizutori-auth";

export default {
  data: function() {
    return {
      data: data
    };
  },
  methods: {
    clickBtn: async function(id) {
      window.open(await obmessages.getDownloadURL(id));
    },
    clickBtnLogout: async function() {
      await mizutoriAuth.logout();
      this.$router.push("/mizutori/login");
    }
  }
};
</script>
