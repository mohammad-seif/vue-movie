<template>
  <AppHeader>
    <div class="home-header-container">
      <div class="flex">
        Search by release date:
        <Search 
          @update:modelValue="search"
        />
      </div>
    </div>
  </AppHeader>
  <AppLoading class="dark" v-if="loading" />
  <div class="no-data" v-else-if="movies.length === 0">
    No Data Matching
  </div>
  <div v-else class="movie-container">
    <AppMovieCard
      v-for="(movie, key) in movies"
      :key="key"
      :movie="movie"
      :genres="genres"
    />
  </div>
  <div v-if="movies.length !== 0" class="pagination">
    <div class="link" @click="previousPage">&lt; Previous Page</div>
    <div class="link" @click="nextPage">Next Page ></div>
  </div>
  <div v-if="movies.length !== 0" class="items-conter">Showing {{pageNum === 1 ? 1 : pageNum * 10 + 1}}-{{(movies.length) + (10 * (pageNum - 1))}} Result</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from "@/components/AppSearch.vue";
import AppMovieCard from "@/components/AppMovieCard.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import AppButton from "@/components/common/AppButton.vue";
import { fetchMovies, fetchMovieGenres } from "@/apis/movie";
import AppLoading from '@/components/common/AppLoading.vue';
import { dateFormat } from '../utils/index';

export default defineComponent({
  data: () => ({
    movies: [],
    pageNum: 1,
    genres: [],
    searchValue: [],
    loading: false
  }),
  components: {
    AppButton,
    AppHeader,
    AppMovieCard,
    Search,
    AppLoading
  },
  async created() {
    await this.fetchMoviesHandler();
    const { data } = await fetchMovieGenres();
    this.genres = data.genres;
  },
  methods: {
    async search(newDate: Array<Date>) {
      const [GTE, LTE] = newDate;
      await this.fetchMoviesHandler({
        "release_date.gte": dateFormat(GTE),
        "release_date.lte": dateFormat(LTE)
      })
    },
    async fetchMoviesHandler(query: Object = {}) {
      try {
        this.loading = true;
        const { data } = await fetchMovies({ page: this.pageNum, ...query });
        this.movies = data.results;
      } finally {
        this.loading = false;
      }
    },
    async previousPage() {
      if(this.pageNum === 0) return;
      this.pageNum--;
      this.fetchMoviesHandler();
    },
    async nextPage() {
      this.pageNum++;
      this.fetchMoviesHandler();
    }
  }
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
  /* justify-content: space-between; */
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
  cursor: pointer;
}
.no-data {
  text-align: center;
}
</style>
