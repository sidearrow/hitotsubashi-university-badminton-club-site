<template>
  <div>
    <v-alert
      :value="true"
      color="success"
      icon="check_circle"
      outline
    >投稿を削除しました</v-alert>
    <div class="text-xs-center mt-3">
      <router-link to="/bbs/posts">投稿一覧へ戻る</router-link>
    </div>
  </div>
</template>