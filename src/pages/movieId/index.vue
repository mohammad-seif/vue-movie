<template>
  <AppHeader>
    <div class="header-container">
      <AppButton>
        <template #label>Back</template>
        <template #prepend-icon>&lt;-</template>
      </AppButton>
      <div class="movie-info">
        <h1 class="title">Salam</h1>
        <h3 class="sub-title">Mamad</h3>
      </div>
    </div>
  </AppHeader>
  <AppMovieItem />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/common/AppHeader.vue"
import AppButton from "@/components/common/AppButton.vue";
import AppMovieItem from "@/components/common/AppMovieItem.vue";
export default defineComponent({
  components: {AppMovieItem, AppButton, AppHeader}
})
</script>


<style scoped>
.movie-info {
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  justify-content: start;
  margin-left: 64px
}
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.title {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
}
.sub-title {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}
</style>
