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
      v-for="(card, key) in 3"
      :key="key"
    />
  </div>
  <div class="pagination">
    <RouterLink class="link" to="/">Previous Page</RouterLink>
    <RouterLink class="link" to="/125">Next Page</RouterLink>
  </div>
  <div class="items-conter">Showing 1-20 Result</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
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
  display: grid;
  column-gap: 67px;
  row-gap: 35px;
  grid-template-columns: repeat(3, 1fr);
}

.home-header-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pagination {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}
.items-conter {
  text-align: center
}
.link {
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
}
</style>
