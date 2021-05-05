<template>
  <div class="home">
    <div class="row mt-3 d-flex justify-content-center">
      <img src="../assets/eurovision-logo.png" width="auto" height="220" alt />
    </div>
    <div class="row mt-4">
      <Countdown
        name="1ª Semifinal"
        :date="new Date('May 18, 2021 21:00:00')"
        link="1"
      />
      <Countdown
        name="2ª Semifinal"
        :date="new Date('May 20, 2021 21:00:00')"
        link="2"
      />
      <Countdown
        name="Final"
        :date="new Date('May 22, 2021 21:00:00')"
        link="3"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Countdown from "@/components/Countdown.vue";

export default {
  name: "home",
  components: {
    Countdown,
  },
};
</script>

<style scoped>
h1 {
  color: #2b4078;
}
</style>
