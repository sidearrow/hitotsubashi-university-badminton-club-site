<template>
  <main>
    <content-title title="部員紹介"/>
    <article>
      <section v-for="v in grade">
        <h2 class="md-title">{{ v }}年生</h2>
        <md-card v-for="m in memberData[v]" class="member-card">
          <md-card-header>
            <div class="md-title">{{ m.name }}</div>
          </md-card-header>
          <md-card-content>
            <div>
              <span>{{ m.highschool }}</span>
              <span>（{{ m.prefecture }}）</span>
            </div>
          </md-card-content>
        </md-card>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import memberData from '@/assets/member.json';

export default {
  beforeCreate: function () {
    document.title = '部員紹介 - 一橋バド';
  },
  created: function () {
    memberData.forEach((v) => {
      this.memberData[v.grade].push(v);
    });
    console.log(this.memberData);
  },
  mounted: function () {
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      memberData: {
        1: [],
        2: [],
        3: [],
        4: [],
      },
      grade: [4, 3, 2, 1],
    }
  },
};
</script>

<style>
.member-card {
  margin-bottom: 20px;
}
</style>