<template>
  <AppHeader>
    <div class="home-header-container">
      <div class="flex">
        Search by release date:
        <Search />
      </div>
      <AppButton>
        <template #label>Search</template>
      </AppButton>
    </div>
  </AppHeader>
  <div class="movie-container">
    <AppMovieCard
      v-for="(card, key) in 5"
      :key="key"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from "@/components/AppSearch.vue";
import AppMovieCard from "@/components/AppMovieCard.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import AppButton from "@/components/common/AppButton.vue";

export default defineComponent({
  components: {AppButton,AppHeader, AppMovieCard, Search}
})
</script>


<style scoped>
.movie-container {
  width: 100%;
  /*height: 100vh;*/
  display: flex;
  align-items: start;
  /*justify-content: space-between;*/
  flex-flow: wrap row;
  align-content: space-around;
  margin-top: 110px;
}

.home-header-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
