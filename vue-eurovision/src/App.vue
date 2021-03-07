<template>
  <div id="app">
    <Header />
    <div class="margin">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "main",
  components: {
    Header,
    Footer,
  },
}

</script>


<style>
@import "./assets/style.css";
</style>