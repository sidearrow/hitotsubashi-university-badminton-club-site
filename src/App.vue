<template>
  <div>
    <header>
      <cmp-navbar />
    </header>
    <main>
      <div class="container py-5">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import cmpNavbar from '@/components/Navbar'

export default {
  components: {
    'cmp-navbar': cmpNavbar
  }
}
</script>
