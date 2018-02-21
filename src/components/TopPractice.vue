<template>
  <div class="mdc-card">
      <h4>Practice</h4>
    <div class="mdc-card__media">
      <nav class="mdc-tab-bar">
        <a href="#panelA" class="mdc-tab mdc-tab--active">Location</a>
        <a href="#panelB" class="mdc-tab">Schedule</a>
        <span class="mdc-tab-bar__indicator"></span>          
      </nav>
      <div class="panels">
        <div class="panel active" id="panelA" aria-hidden="false">
          <p><a href="http://www.hit-u.ac.jp/guide/campus/kodaira.html">小平国際キャンパス体育館</a></p>
          <p>（西武多摩湖線一橋学園駅南口から徒歩7分）</p>
        </div>
        <div class="panel" id="panelB" aria-hidden="true">
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