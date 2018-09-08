<template>
  <div>
    <content-title title="部員紹介" :items="titleItems"/>
    <article>
      <section v-for="v in grade">
        <h2>{{ v }}年生</h2>
        <div
          v-for="m in memberData[v]"
        >
          <p>
            <div>{{ m.name }}</div>
            <div class="badge bg-sub text-white">
              <span>{{ m.highschool }}</span>
              <span>（{{ m.prefecture }}）</span>
            </div>
            <div>
              <span
                v-for="p in m.position"
                class="badge bg-main text-white mr-1"
              >{{ p }}</span>
            </div>
          </p>
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