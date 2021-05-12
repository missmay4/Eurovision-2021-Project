<template>
  <div class="">
    <h1 class="d-flex justify-content-center mt-4">Grand Final Participants</h1>
    <div class="row">
      <div v-for="participant in participants" v-bind:key="participant.name">
        <CountryVote
          class="col mt-3 mb-3"
          v-if="participant.gala[0].date === '2021-05-22'"
          :id="participant.id"
          :name="participant.name"
          :country="participant.country.name"
          :countryCode="participant.country.code"
          :gala="participant.gala[0].performanceOrder"
          v-bind:key="participant.country.code"
          v-model="checked"
          :disabled="checked.length > 2"
        />
        <!-- <CountryVote
          class="col mt-3 mb-3"
          v-if="participant.gala[1].date === '2021-05-22'"
          :id="participant.id"
          :name="participant.name"
          :country="participant.country.name"
          :countryCode="participant.country.code"
          :gala="participant.gala[0].performanceOrder"
          v-bind:key="participant.name"
        /> -->
      </div>
    </div>
    <b-button
      class="justify-content-center"
      block
      variant="outline-danger"
      :disabled="checked.length < 3"
      >Save vote</b-button
    >
  </div>
</template>

<script>
import participantsServices from "@/services/participantsServices";
import CountryVote from "@/components/CountryVote.vue";

export default {
  name: "listCountryFinal",
  components: {
    CountryVote,
  },

  data: () => ({
    participants: [],
    checked: [],
  }),

  mounted() {
    this.getParticipants();
  },

  methods: {
    getParticipants() {
      participantsServices
        .get_participants()
        .then((response) => {
          let aux = response.data;
          let final = [];
          for (let i in aux) {
            if (aux[i].gala[0].date === "2021-05-22") {
              final.push(aux[i]);
            } /* else if (aux[i].gala[1].date === "2021-05-22") {
              final.push(aux[i]);
            } */
          }

          // ordena el array por orden de actuacion
          final.sort((a, b) => {
            if (a.gala[0].performanceOrder < b.gala[0].performanceOrder)
              return -1;
            return a.gala[0].performanceOrder > b.gala[0].performanceOrder
              ? 1
              : 0;
          });
          this.participants = final;
          console.log(this.participants);
        })
        .catch(() => {
          console.log(
            "Se ha producido un error cargando la lista de participantes de la primera semifinal"
          );
        });
    },
  },
};
</script>

<style>
</style>