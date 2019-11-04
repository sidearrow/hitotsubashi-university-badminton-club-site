<template>
<body>
  <header>
    <cmp-navbar />
  </header>
  <main class="container" style="max-width: 720px">
    <div class="py-5">
        <router-view />
    </div>
  </main>
  <footer>
    <cmp-footer></cmp-footer>
  </footer>
</body>
</template>

<script>
import cmpNavbar from "@/components/Navbar";
import cmpFooter from "@/components/Footer";

export default {
  components: {
    "cmp-navbar": cmpNavbar,
    "cmp-footer": cmpFooter
  }
};
</script>
