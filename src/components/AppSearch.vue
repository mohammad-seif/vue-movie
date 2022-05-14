<template>
  <div class="flex">
    <Datepicker class="search-input" range v-model="model" :format="format" />
    <AppButton @click="search" class="search-button">
      <template #label>Search</template>
    </AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { dateFormat } from "@/utils";
import AppButton from "@/components/common/AppButton.vue"

export default defineComponent({
  data: () => ({
    model: []
  }),
  methods: {
    format(date: Array<Date>) {
      const [from, to] = date;
      return `${dateFormat(from)} to ${dateFormat(to)}`;
    },
    search() {
      this.$emit("update:modelValue", this.model)
    }
  },
  components: {
    Datepicker,
    AppButton
  },
});
</script>

<style scoped>
.search-button {
  margin-left: 10px;
}
.search-input {
  width: 100%;
  margin-left: 10px;
}
</style>
