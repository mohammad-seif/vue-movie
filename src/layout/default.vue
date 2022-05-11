<template>
  <div class="header"></div>
  <div class="content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
})
</script>


<style scoped>
.header {
  position: fixed;
  inset: 0 0;
  width: 100vw;
  height: 48px;
  background: rgba(17, 185, 128, 1);
}
.content {
  width: 100vw;
  padding: 5em 13em;
}
</style>
