<template>
  <div>
    <v-alert
      v-if="isDone"
      :value="true"
      color="success"
      icon="check_circle"
      outline
    >投稿を削除しました</v-alert>
    <router-link to="/bbs/post">投稿一覧へ戻る</router-link>
  </div>
</template>