<template>
  <div>
    <h1 class="mdc-typography--display1">部員紹介</h1>
    <ul class="mdc-list">
      <li class="mdc-list-item" v-for="list in lists"><i class="material-icons mdc-list-item__graphic">person</i>{{list}}</li>
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
            <h4 class="mdc-typography--subheading1">{{ grade }}年</h4>
            <ul class="mdc-list" v-for="val in data">
              <li class="mdc-list-item" style="height:auto;margin-bottom:8px">
                <i class="material-icons mdc-list-item__graphic">person</i>
                <div class="mdc-list-item__text">
                  {{ val.name }}
                  <div class="mdc-chip-set mdc-list-item__secondary-text" style="white-space:normal;font-size:0.8rem">
                    <div class="mdc-chip"><div class="mdc-chip__text">{{ val.fac }}</div></div>
                    <div class="mdc-chip"><div class="mdc-chip__text">{{ val.hs }}</div></div>
                    <div class="mdc-chip" v-if="val.pos !== ''"><div class="mdc-chip__text">{{ val.pos }}</div></div>
                  </div>
                </div>
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
  beforeCreate: function () {
    document.title = '部員紹介 - 一橋バド';
  },
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
      lists: {
        a: '部長……高橋真弓',
        b: '監督……小原貴文',
        c: 'コーチ……中山朋子',
      },
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