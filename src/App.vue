<template>
  <body>
    <header>
      <cmp-navbar />
    </header>
    <main>
      <div class="container py-5">
        <router-view/>
      </div>
    </main>
    <footer>
      <cmp-footer></cmp-footer>
    </footer>
  </body>
</template>

<script>
import cmpNavbar from '@/components/Navbar'
import cmpFooter from '@/components/Footer'

export default {
  components: {
    'cmp-navbar': cmpNavbar,
    'cmp-footer': cmpFooter
  }
}
</script>
