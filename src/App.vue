<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<script lang="ts">
import DefaultLayout from './layout/default.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    DefaultLayout,
  }
})
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/roboto');
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
html {
  font-family: Roboto, Verdana;
  overflow-x: hidden;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
