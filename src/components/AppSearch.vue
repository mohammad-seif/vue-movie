<template>
  <Datepicker class="search-input" range v-model="model" format="date" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default defineComponent({
  props: {
    model: Object as () => Array<string>
  },
  components: {
    Datepicker
  }
});
</script>

<style scoped>
.search-input {
  margin-left: 10px;
}
</style>
