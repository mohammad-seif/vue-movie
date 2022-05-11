<template>
  <input class="search-input" type="text" @change="change">
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {

  },
  data: () => ({

  }),
  methods: {
    change(e) {
      console.log("sdfghj", e)
    }
  }
})
</script>

<style scoped>
.search-input {
  width: 221px;
  height: 31px;
  border: none;
  outline: none;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  margin: 0 10px;
}
</style>