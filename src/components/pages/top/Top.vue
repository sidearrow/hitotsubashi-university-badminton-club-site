<template>
  <div>
    <article>
      <div class="slf-img-slider">
        <div v-for="i in 3">
          <input v-if="i === 1" type="radio" name="slf-img-slider__switch" :id="'img' + i" checked>
          <input v-else type="radio" name="slf-img-slider__switch" :id="'img' + i">
          <label :for="'img' + i">
            <img :src="'/static/img/topimage' + i + '.jpg'">
          </label>
          <img :src="'/static/img/topimage' + i + '.jpg'">
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    document.title = 'TOP - 一橋バド';
  },
  mounted () {
    document.querySelector('.slf-img-slider > div > img').addEventListener('load', function () {
      document.querySelector('.slf-img-slider').style.paddingTop =  this.height + 10 +  'px';
    });
  }
};
</script>

<style>
.slf-img-slider {
  position: relative;
  margin: 2em auto;
  text-align: center;
}
.slf-img-slider > div {
  display: inline;
}
.slf-img-slider > div > img {
  max-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s;
  border-radius: 3px;
}
.slf-img-slider input {
  display: none;
}
.slf-img-slider label {
  margin: 15px 5px 0 5px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0.6;
  border-radius: 3px;
}
.slf-img-slider label:hover {
  opacity: 0.9;
}
.slf-img-slider label img {
  display: block;
  width: 40px;
  border-radius: 2px;
}
.slf-img-slider input:checked + label {
  opacity: 1;
}
.slf-img-slider input ~ img {
  opacity: 0;
}
.slf-img-slider input:checked + label + img {
  opacity: 1;
}
</style>