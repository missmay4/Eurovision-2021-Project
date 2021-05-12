<template>
  <div class="col-sm-12 col-md-4 col-lg-4">
    <b-alert show variant="primary">
      <h4 class="alert-heading">
        {{ name }}
        {{
          date.toLocaleDateString("default", { month: "long", day: "numeric" })
        }}
      </h4>
      <span>{{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s</span>
      <hr />
      <b-button
        v-if="name === '1ª Semifinal'"
        variant="outline-primary"
        block
        @click="$router.push('firstSemifinal')"
        >See country list
      </b-button>
      <b-button
        v-if="name === '2ª Semifinal'"
        variant="outline-primary"
        block
        @click="$router.push('secondSemifinal')"
        >See country list
      </b-button>
      <b-button
        v-if="name === 'Final'"
        variant="outline-primary"
        block
        @click="$router.push('Final')"
        >See country list
      </b-button>
      <!-- <router-link :to="'/listCountryVote#' + link">
        <a
          class="btn btn-light btn-lg btn-block"
          v-bind:class="{ disabled: this.distance > 0 }"
          role="button"
          >Vote!</a
        >
      </router-link> -->
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    name: String,
    date: Date,
    link: String,
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      this.distance = this.date.getTime() - now;

      if (this.distance < 0) {
        clearInterval(this.interval);
      } else {
        // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor(
          (this.distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.center {
  margin-left: 20%;
}

h1 {
  color: #2b4078;
}

p {
  color: #293e77;
}
</style>