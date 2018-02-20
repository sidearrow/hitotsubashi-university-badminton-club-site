<template>
  <div>
    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp">
      <div class="mdl-card__supporting-text">
        <h4>Member</h4>
      </div>
      <div class="mdl-card__supporting-text">
        <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
          <div class="mdl-tabs__tab-bar">
            <a href="#panelBA" class="mdl-tabs__tab is-active">TOP</a>
            <a href="#panel-member-1" class="mdl-tabs__tab">1年</a>
            <a href="#panel-member-2" class="mdl-tabs__tab">2年</a>
            <a href="#panel-member-3" class="mdl-tabs__tab">3年</a>
            <a href="#panel-member-4" class="mdl-tabs__tab">4年</a>
          </div>
          <div class="mdl-tabs__panel is-active" id="panelBA">
            <ul>
              <li><span style="width:100px">部長</span><span>高橋真弓</span></li>
              <li><span style="width:100px">監督</span><span>小原貴文</span></li>
              <li><span style="width:100px">コーチ</span><span>中山朋子</span></li>
            </ul>
          </div>
          <div class="mdl-tabs__panel" :id="`panel-member-${grade}`" v-for="(data, grade) in member">
            <h4>{{ grade }}年</h4>
            <ul v-for="val in data">
              <li>
                <span>{{ val.name }}<span>{{ val.fac }}</span></span>
                <ul style="list-style:none;">
                  <li style="font-size:.8rem;">{{ val.hs }}</li>
                  <li style="font-size:.8rem;">{{ val.pos }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../Config.js';
import axios from 'axios';

export default {
  created: function () {
    axios.get(config.member).then((res) => {
      res.data.forEach((val) => {
        this.member[val.grade].push({
          name: val.name,
          sx: val.sx,
          fac: val.faculty,
          hs: `${val.school}（${val.prefec}）`,
          pos: val.position,
        });
      });
    }).catch((res) => {
      this.member.isError = true;
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
  }
};
</script>