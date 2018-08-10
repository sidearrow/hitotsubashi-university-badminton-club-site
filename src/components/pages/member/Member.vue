<template>
  <div>
    <content-title title="部員紹介"/>
    <article>
      <section v-for="v in grade">
        <h2 class="mdc-typography--headline5">{{ v }}年生</h2>
        <ul
          v-for="m in memberData[v]"
          class="mdc-list mdc-list--two-line"
        >
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{ m.name }}</span>
              <span class="mdc-list-item__secondary-text">
                <span>{{ m.highschool }}</span>
                <span>（{{ m.prefecture }}）</span>
              </span>
              <span class="mdc-list-item__secondary-text">{{ m.position }}</span>
            </span>
          </li>
        </ul>
      </section>
    </article>
  </div>
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
</style>