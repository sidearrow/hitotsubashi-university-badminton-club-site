<template>
  <div class="mdc-card mdc-card--stroked">
    <div class="slf-card-article">
      <p>Practice</p>
    </div>
    <div class="slf-card-article">
      <section>
        <nav class="mdc-tab-bar" id="toppractice-tab">
          <a class="mdc-tab mdc-tab--active" data-tab="1" @click="clickTab">Location</a>
          <a class="mdc-tab" data-tab="2" @click="clickTab">Schedule</a>
          <span class="mdc-tab-bar__indicator"></span>          
        </nav>
      </section>
      <section>
        <div class="panels" id="toppractice-panels">
          <div class="panel active" data-tab="1">
            <p><a href="http://www.hit-u.ac.jp/guide/campus/kodaira.html">小平国際キャンパス体育館</a></p>
            <p>（西武多摩湖線一橋学園駅南口から徒歩7分）</p>
          </div>
          <div class="panel" data-tab="2">
            <p>授業期</p>
            <ul>
              <li>月 …… 16:00 ~ 19:30</li>
              <li>水 …… 16:00 ~ 19:00</li>
              <li>金 …… 16:00 ~ 19:00</li>
              <li>土 …… 14:00 ~ 18:30</li>
            </ul>
            <p>休業期</p>
            <ul>
              <li>月 …… 09:00 ~ 13:00</li>
              <li>火 …… 14:00 ~ 18:00</li>
              <li>水 …… 13:00 ~ 17:00</li>
              <li>金 …… 09:00 ~ 13:30</li>
              <li>土 …… 13:00 ~ 18:00</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

import {clickTab} from '../Functions';

export default {
  mounted: function () {
    const tabBar = new MDCTabBar(document.getElementById('toppractice-tab'));
  },
  methods: {
    clickTab: function (event) {
      clickTab(event, document.getElementById('toppractice-panels'));
    },
  },
};
</script>

<style>
.mdl-tabs__tab-bar {
  margin-bottom: 20px;
}
</style>