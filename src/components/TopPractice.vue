<template>
  <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp">
    <div class="mdl-card__supporting-text">
      <h4>Practice</h4>
    </div>
    <div class="mdl-card__supporting-text">
      <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div class="mdl-tabs__tab-bar">
          <a href="#panelA" class="mdl-tabs__tab is-active">Location</a>
          <a href="#panelB" class="mdl-tabs__tab">Schedule</a>
        </div>
        <div class="mdl-tabs__panel is-active" id="panelA">
          <p><a href="http://www.hit-u.ac.jp/guide/campus/kodaira.html">小平国際キャンパス体育館</a></p>
          <p>（西武多摩湖線一橋学園駅南口から徒歩7分）</p>
        </div>
        <div class="mdl-tabs__panel" id="panelB">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mdl-tabs__tab-bar {
  margin-bottom: 20px;
}
</style>