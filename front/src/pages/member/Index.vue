<template>
  <div>
    <content-title title="部員紹介" :items="titleItems"/>
    <article>
      <section v-for="(gradev, gradei) in grade" :key="gradei">
        <h2>{{ gradev }}年生</h2>
        <div
          v-for="(memberv, memberi) in memberData[gradev]" :key="memberi"
        >
          <div>{{ memberv.name }}</div>
          <div class="badge bg-sub text-white">
            <span>{{ memberv.highschool }}</span>
            <span>（{{ memberv.prefecture }}）</span>
          </div>
          <div class="mb-3">
            <span
              v-for="(posv, posi) in memberv.position" :key="posi"
              class="badge bg-main text-white mr-1"
            >{{ posv }}</span>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle'
import memberData from '@/assets/json/member.json'
import config from '@/config'

export default {
  beforeCreate: function () {
    document.title = '部員紹介 - 一橋バド';
  },
  created: function () {
    this.memberData = memberData
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      titleItems: [config.pageList.member],
      memberData: {},
      grade: [4, 3, 2, 1],
    }
  },
};
</script>

<style>
</style>