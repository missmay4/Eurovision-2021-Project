<template>
  <div class="home">
    <div class="row d-flex justify-content-center">
      <img src="../assets/eurovision-logo.png" width="auto" height="220" alt />
    </div>
    <div class="row mt-3 d-flex justify-content-center">
      <b-button
        v-b-modal.register-modal
        variant="danger"
        class="separate-button"
        >Register here</b-button
      >
      <b-button v-b-modal.login-modal variant="primary">Log-in here</b-button>
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
    <b-modal id="register-modal" title="Register">
      <b-form>
        <b-form-group id="input-name" label="Username" label-for="input-name">
          <b-form-input
            id="inline-form-input-name"
            v-model="user.name"
            class="mb-2"
            placeholder="Type your prefered name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-name" label="Password" label-for="input-name">
          <b-form-input
            type="password"
            id="user-password"
            v-model="user.password"
            placeholder="Type your password"
            aria-describedby="password-help-block"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form-group>
        <b-form-group>
          <b-form-select v-model="user.country" :options="countries">
            <template #first>
              <b-form-select-option :value="null" disabled
                >Select your country</b-form-select-option
              >
            </template></b-form-select
          >
        </b-form-group>
      </b-form>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="primary" size="sm" class="float-right mr-2">
            <!-- TODO: Register submit -->
            Create user
          </b-button>
        </div>
      </template>
    </b-modal>
    <b-modal id="login-modal" title="Log-in">
      <b-form>
        <b-form-group id="input-name" label="Username" label-for="input-name">
          <b-form-input
            id="inline-form-input-name"
            v-model="user.name"
            class="mb-2"
            placeholder="Type your prefered name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-name" label="Password" label-for="input-name">
          <b-form-input
            type="password"
            id="user-password"
            v-model="user.password"
            placeholder="Type your password"
            aria-describedby="password-help-block"
          ></b-form-input>
        </b-form-group>
      </b-form>
      <div v-if="error_msg !== ''">
        <p>{{ error_msg }}</p>
      </div>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right mr-2"
            @click="login(user)"
          >
            Log-in
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>


<script>
// @ is an alias to /src
import Countdown from "@/components/Countdown.vue";
import { mapMutations, mapActions } from "vuex";
import participantsServices from "@/services/participantsServices";
import userServices from "@/services/userServices";

export default {
  name: "home",
  components: {
    Countdown,
  },
  data() {
    return {
      /*user: {
        name: null,
        password: null,
        country: null,
      }, */
      user: {
        name: null,
        password: null,
        country: null,
      },
      error_msg: "",
      countries: null,
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      participantsServices
        .get_participants()
        .then((response) => {
          let aux = response.data;
          let countriesList = [];
          for (let i in aux) {
            countriesList.push(aux[i].country.name);
          }
          console.log(countriesList);
          this.countries = countriesList;
        })
        .catch(() => {
          console.log(
            "Se ha producido un error cargando la lista de paises del combo"
          );
        });
    },
    ...mapMutations(["getUser"]),
    ...mapActions(["saveUser", "readToken", "endSession"]),
    login(user) {
      userServices
        .log_user(user)
        .then((response) => {
          const token = response.data.token;
          this.saveUser(token);
        })
        .catch((error) => {
          console.log(error.response.data.error_msg);
          this.error_msg = error.response.data.error_msg;
        });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #2b4078;
}
.separate-button {
  margin-right: 100px;
}
</style>
