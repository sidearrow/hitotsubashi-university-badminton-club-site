<template>
  <header>
    <nav class="navbar fixed-top navbar-dark navbar-expand-lg" style="background-color:#ac2926;">
      <a class="navbar-brand" href="#">Hitotsubashi Badminton</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/member">Member</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/bbs/list/1">BBS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/mizutori">Mizutori</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  watch: {
    '$route': function () {
      document.querySelector('.navbar-collapse').classList.remove('show');
    },
  }
}
</script>>