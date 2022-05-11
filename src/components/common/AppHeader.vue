<template>
  <div class="app-header">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.app-header {
  width: 100%;
  height: 50px;
  background: #E2E2E2;
  border-radius: 6px;
  padding: 33px 81px;
}
</style>