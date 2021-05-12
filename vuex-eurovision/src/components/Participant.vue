<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card mr-1 mt-1 mb-1 ml-1">
      <img
        :src="loadImage('EuroSingers/' + countryCode + '.jpg')"
        class="card-img-top"
        :alt="name"
      />
      <div class="card-body noPadding">
        <div class="artistCountry">
          <div class="artistFlag">
            <img
              class="flags"
              :src="loadImage('EuroFlags/Euro' + countryCode + '.png')"
              :alt="'Euro' + countryCode"
            />
          </div>
          <div class="artistTitle">
            <h5 class="card-title cardMargin noMargin">
              <b>{{ country }}</b>
            </h5>
          </div>
        </div>
        <h6 class="card-title cardFont noMargin">{{ name }}</h6>
        <h6 class="card-title cardFont noMargin">{{ songName }}</h6>
        <a :href="songLink" target="_blank" class="card-title"
          >Listen the song</a
        >
        <!-- checkbox para guardar favoritos -->
        <div class="container">
          <div class="row myInput">
            <input
              class="form-check-input checkear"
              type="checkbox"
              :value="country"
              v-model="InternalValue"
              :disabled="disabled"
            />
            <h6 class="text">
              Select as favorite
              <i class="fa fa-heart" aria-hidden="true"></i>
            </h6>
          </div>
        </div>
        <!-- checkbox para guardar favoritos -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Participant",
  methods: {
    loadImage(imageName) {
      return require("../assets/" + imageName);
    },
  },
  props: {
    id: Number,
    name: String,
    country: String,
    countryCode: String,
    songLink: String,
    songName: String,
    checked: Array,
    disabled: Boolean,
  },
  model: {
    prop: "checked",
  },
  computed: {
    InternalValue: {
      get() {
        return this.checked;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
};
</script>

<style scoped>
.cardFont {
  font-size: 13px;
}

.cardMargin {
  margin-top: 3%;
}

.text {
  margin-top: 2%;
}

.noMargin {
  margin-bottom: 2px !important;
}

.noPadding {
  padding-bottom: 6px !important;
}

.myInput {
  margin-left: 2%;
}
.fa-heart {
  color: red !important;
}
</style>
