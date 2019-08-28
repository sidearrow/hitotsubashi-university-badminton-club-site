<template>
  <b-navbar toggleable="md" type="light" variant="transparent" class="border-bottom border-secondary">
    <b-navbar-brand to="/">一橋大学<br/>バドミントン部</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" class="ml-md-3" is-nav>
      <b-navbar-nav>
        <b-nav-item class="font-size--1_1" to="/about">部活情報</b-nav-item>
        <b-nav-item class="font-size--1_1" to="/members">部員情報</b-nav-item>
        <b-nav-item class="font-size--1_1" to="/results">大会結果</b-nav-item>
        <b-nav-item class="font-size--1_1" to="/santama">三多摩大会</b-nav-item>
        <b-nav-item class="font-size--1_1" to="/bbs">掲示板</b-nav-item>
        <b-nav-item class="font-size--1_1" to="/mizutori/login">みずとり会</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto mt-md-0 mt-2">
        <b-nav-item target="_blank" href="https://twitter.com/hit_u_bad">
          <i class="icon-twitter font-size--1_5"></i>
          <span class="ml-2 font-size--1_1 align-top">Twitter</span>
        </b-nav-item>
        <b-nav-item target="_blank" href="https://github.com/sidearrow/hit-u-bad">
          <i class="icon-github font-size--1_5"></i>
          <span class="ml-2 font-size--1_1 align-top">GitHub</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
