<template>
  <div class="btn">
    <slot name="prepend-icon"/>
    <slot name="label"/>
    <slot name="append-icon"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({

})
</script>


<style scoped>
.btn {
  width: 92px;
  height: 33px;
  background: #549DF2;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: 0.2s transform ease-in-out;
}
.btn:hover {
  transform: scale(1.03);
}
</style>
