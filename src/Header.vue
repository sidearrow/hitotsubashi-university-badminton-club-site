<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg bg-dark">
      <a class="navbar-brand text-white" href="#">Hitotsubashi Badminton</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
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
export default {}
</script>>