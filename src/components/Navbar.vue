<template>
  <b-navbar toggleable="lg" type="light" variant="transparent" class="border-bottom border-secondary">
    <b-navbar-brand to="/">一橋大学<br/>バドミントン部</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">部活情報</b-nav-item>
        <b-nav-item to="/members">部員情報</b-nav-item>
        <b-nav-item to="/results">大会結果</b-nav-item>
        <b-nav-item to="/santama">三多摩大会</b-nav-item>
        <b-nav-item to="/mizutori/login">みずとり会</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
