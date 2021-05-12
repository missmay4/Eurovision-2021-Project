<template>
  <div>
    <div class="form-check form-check-inline">
      <label
        class="form-check-label espaciocheck country"
        for="inlineCheckbox1"
      >
        <b class="number">{{ gala }}</b>
        {{ country }}
      </label>
      <input
        class="form-check-input checkear"
        type="checkbox"
        :value="countryCode"
        v-model="InternalValue"
        :disabled="disabled"
      />
    </div>
    <img
      class="flags"
      :src="loadImage('EuroFlags/Euro' + countryCode + '.png')"
      :alt="'Euro' + countryCode"
    />
  </div>
</template>

<script>
export default {
  name: "CountryVote",
  props: {
    id: String,
    name: String,
    country: String,
    countryCode: String,
    gala: Number,
    checked: Array,
    disabled: Boolean,
  },
  methods: {
    loadImage(imageName) {
      return require("../assets/" + imageName);
    },
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
.number {
  color: black;
}
</style>