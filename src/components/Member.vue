<template>
  <div>
    <h1 class="mdc-typography--display1">部員紹介</h1>
    <ul class="mdc-list">
      <li class="mdc-list-item">部長……高橋真弓</li>
      <li class="mdc-list-item">監督……小原貴文</li>
      <li class="mdc-list-item">コーチ……中山朋子</li>
    </ul>
    <div>
      <section>
        <nav class="mdc-tab-bar" id="topmember-tab">
          <a class="mdc-tab" data-tab="1" @click="clickTab">1年</a>
          <a class="mdc-tab" data-tab="2" @click="clickTab">2年</a>
          <a class="mdc-tab" data-tab="3" @click="clickTab">3年</a>
          <a class="mdc-tab" data-tab="4" @click="clickTab">4年</a>
          <span class="mdc-tab-bar__indicator"></span>          
        </nav>
      </section>
      <section>
        <div class="panels" id="topmember-panels">
          <div class="panel" :data-tab="grade" v-for="(data, grade) in member">
            <h4>{{ grade }}年</h4>
            <ul v-for="val in data">
              <li>
                <span>{{ val.name }}<span class="mdc-typography--caption" style="margin-left:10px">{{ val.fac }}</span></span>
                <ul style="list-style:none;">
                  <li style="font-size:.8rem;">{{ val.hs }}</li>
                  <li style="font-size:.8rem;">{{ val.pos }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {MDCTabBar} from '@material/tabs';
import {clickTab} from '../Functions';

import data from '@/assets/member.json'

export default {
  mounted: function () {
    const tabBar = new MDCTabBar(document.getElementById('topmember-tab'));
    document.querySelector('#topmember-panels > .panel:nth-child(1)').classList.add('active');
  },
  created: function () {
    data.forEach((val) => {
      this.member[val.grade].push({
        name: val.name,
        sx: val.sx,
        fac: val.faculty,
        hs: `${val.school}（${val.prefec}）`,
        pos: val.position,
      });
    });
  },
  data: function () {
    return {
      member: {
        4: [],
        3: [],
        2: [],
        1: [],
      }
    }
  },
  methods: {
    clickTab: function (event) {
      clickTab(event, document.getElementById('topmember-panels'));
    },
  }
};
</script>