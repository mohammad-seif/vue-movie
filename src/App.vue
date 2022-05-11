<template>
  <div>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>

<script lang="ts">
import DefaultLayout from "./layout/default.vue"
import { RouterLink, RouterView } from 'vue-router';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    DefaultLayout
  }
})
</script>

<style>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
@import url('http://fonts.cdnfonts.com/css/roboto');
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
