<template>
  <div class="loading-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.loading-ring {
  display: grid;
  place-items: center;
  position: absolute;
  inset: 0% 0% 0 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(196, 196, 196, 0.5);;
}
.loading-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 8px;
  border: 5px solid #fff;
  border-radius: 50%;
  animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.loading-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>