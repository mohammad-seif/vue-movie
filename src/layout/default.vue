<template>
  <div class="header"></div>
  <div class="content">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>


<style scoped>
.header {
  width: 100vw;
  height: 48px;
  background: rgba(17, 185, 128, 1);
}
.content {
  width: 100vw;
  padding: 4.3em 13em;
}
</style>
