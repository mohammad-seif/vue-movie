<template>
  <AppHeader>
    <div class="header-container">
      <AppButton @click="$router.push('/')">
        <template #label>Back</template>
      </AppButton>
      <div class="movie-info">
        <h1 class="title">{{ movie.title }}</h1>
        <h3 class="sub-title">{{ movie.tagline }}</h3>
      </div>
    </div>
  </AppHeader>
  <AppMovieItem v-if="movie.id" :movie="movie"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/common/AppHeader.vue"
import AppButton from "@/components/common/AppButton.vue";
import { fetchMovieById } from "@/apis/movie";
import AppMovieItem from "@/components/AppMovieItem.vue";
import type IMovie from "@/model/movie";

type Data = {
  movie: IMovie
}

export default defineComponent({
  components: {
    AppMovieItem,
    AppButton,
    AppHeader
  },
  data: () => <Data>({
    movie: {}
  }),
  async created() {
    const { data } = await fetchMovieById(+this.$route.params.movieId);
    this.movie = data;
  }
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
  font-weight: bolder;
  font-size: 18px;
}
.sub-title {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}
</style>
