<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/img/topimage1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/topimage2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/topimage3.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div>2017年7月現在、私達一橋大学バドミントン部は男子24名、女子7名の計31名で活動しています。男女・経験者大学始め関係なく、リーグ戦での4部への昇格を目指して日々練習に励んでいます。</div>
    <div class="card-deck mt-5">
      <div class="card" style="border-color:#ac2926;">
        <div class="card-header text-white" style="background-color:#ac2926">Practice</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <p><a href="http://www.hit-u.ac.jp/guide/campus/kodaira.html">小平国際キャンパス体育館</a><br>（西武多摩湖線一橋学園駅南口から徒歩7分）</p>
            </li>
            <li class="list-group-item">
              <p>授業期</p>
              <ul>
                <li>月 …… 16:00 ~ 19:30</li>
                <li>水 …… 16:00 ~ 19:00</li>
                <li>金 …… 16:00 ~ 19:00</li>
                <li>土 …… 14:00 ~ 18:30</li>
              </ul>
            </li>
            <li class="list-group-item">
              <p>休業期</p>
              <ul>
                <li>月 ……  9:00 ~ 13:00</li>
                <li>火 …… 14:00 ~ 18:00</li>
                <li>水 …… 13:00 ~ 17:00</li>
                <li>金 ……  9:00 ~ 13:30</li>
                <li>土 …… 13:00 ~ 18:00</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="card" style="border-color:#ac2926;">
        <div class="card-header text-white" style="background-color:#ac2926">Member</div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div><span class="d-inline-block" style="width:100px">部長</span><span>高橋真弓</span></div>
              <div><span class="d-inline-block" style="width:100px">監督</span><span>小原貴文</span></div>
              <div><span class="d-inline-block" style="width:100px">コーチ</span><span>中山朋子</span></div>
            </li>
            <li class="list-group-item" v-for="(data, grade) in member">
              <h4>{{ grade }}年</h4>
              <ul class="col" v-for="val in data">
                <li class="row align-bottom">
                  <span class="col-lg-4">{{ val.name }}<span class="badge badge-light pl-2">{{ val.fac }}</span></span>
                  <ul style="list-style:none;">
                    <li style="font-size:.8rem;">{{ val.hs }}</li>
                    <li style="font-size:.8rem;">{{ val.pos }}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
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
      console.log(this.member);
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