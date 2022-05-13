<template>
  <AppHeader>
    <div class="home-header-container">
      <div class="flex">
        Search by release date:
        <Search 
          :model="searchValue"
          @changeModel="changeSearchValue"
        />
      </div>
      <AppButton @click="search">
        <template #label>Search</template>
      </AppButton>
    </div>
  </AppHeader>
  <div class="movie-container">
    <AppMovieCard
      v-for="(movie, key) in movies"
      :key="key"
      :movie="movie"
      :genres="genres"
    />
  </div>
  <div class="pagination">
    <div class="link" @click="previousPage">&lt; Previous Page</div>
    <div class="link" @click="nextPage">Next Page ></div>
  </div>
  <div class="items-conter">Showing {{pageNum === 1 ? 1 : pageNum * 10 + 1}}-{{(movies.length) + (10 * (pageNum - 1))}} Result</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from "@/components/AppSearch.vue";
import AppMovieCard from "@/components/AppMovieCard.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import AppButton from "@/components/common/AppButton.vue";
import { fetchMovies, fetchMovieGenres } from "@/apis/movie";
import { useMovieStore } from "@/stores/movie"
import { isThisQuarter } from 'date-fns';

export default defineComponent({
  data: () => ({
    movies: [],
    pageNum: 1,
    genres: [],
    searchValue: []
  }),
  components: {
    AppButton,
    AppHeader,
    AppMovieCard,
    Search
  },
  async created() {
    const store = useMovieStore();
    await this.fetchMoviesHandler();
    const { data } = await fetchMovieGenres();
    this.genres = data.genres;
    store.setGenres(this.genres);
  },
  methods: {
    changeSearchValue(value: never[]) {
      this.searchValue = value;
    },
    async search() {
      const [GTE, LTE] = this.searchValue;
      console.log(GTE, LTE)
      await this.fetchMoviesHandler({
        "release_date.gte": GTE,
        "release_date.lte": LTE
      })
    },
    async fetchMoviesHandler(query: Object = {}) {
      const { data } = await fetchMovies({ page: this.pageNum, ...query });
      this.movies = data.results;
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
  cursor: pointer;
}
</style>
