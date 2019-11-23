<template>
  <div>
    <h1 class="hub-h1">みずとり会のページ</h1>
    <div class="row mb-3 justify-content-end">
      <div class="col-md-3">
        <button class="btn btn-block btn-outline-secondary" @click="clickBtnLogout()">ログアウト</button>
      </div>
    </div>
    <section class="mb-5" v-for="(year, i) in data" :key="i">
      <h2 class="hub-h2">{{ year.year }} 年度</h2>
      <div class="form-row">
        <div class="col-md-3 col-sm-4 col-6 py-1" v-for="(month, j) in year.files" :key="j">
          <a
            class="btn btn-block btn-outline-main"
            @click="clickBtn(month.fileName, $event)"
            target="_blank"
            href="#"
            data-url="0"
          >{{ month.title }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from "@/assets/json/ob_messages.json";
import AuthService from "../../services/AuthService";
import StorageService from "../../services/StorageService";

export default {
  data: function() {
    return {
      data: data,
      showFailOpenFileAlert: false
    };
  },
  created: function() {
    this.elFileOpenLink = document.getElementById("fileOpenLink");
  },
  methods: {
    clickBtn: async function(fileName, e) {
      if (e.target.getAttribute("data-url") === "0") {
        e.preventDefault();
        try {
          e.target.href = await StorageService.getDownloadURL(
            "ob-messages/" + fileName
          );
          e.target.setAttribute("data-url", "1");
        } catch (_) {
          e.target.href = '/error';
          e.target.setAttribute("data-url", "1");
        }
        e.target.click();
      }
    },
    clickBtnLogout: async function() {
      await AuthService.logout();
      this.$router.push("/mizutori/login");
    }
  }
};
</script>
