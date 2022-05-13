<template>
  <div class="movie-item-card">
    <div class="movie-item-image">
      <img v-if="!loading" :src="img" alt="" height="550">
      <AppLoading v-if="loading" />
    </div>
    <div class="movie-item-info">
      <div class="movie-item-info-list">
        <div class="key">
          Budget
        </div>
        <div class="value">
          ${{ movie.budget }}
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          Revenue
        </div>
        <div class="value">
          ${{ movie.revenue }}
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          BudRelease Dateget
        </div>
        <div class="value">
          {{ movie.release_date }}
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          Runtime
        </div>
        <div class="value">
          {{ (movie.runtime / 60).toFixed(0) }}h {{ (movie.runtime % 60) }}m
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          Score
        </div>
        <div class="value">
          {{ movie.vote_average }} ({{movie.vote_count}} votes)
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          Genres
        </div>
        <div class="value">
          {{ movie.genres.map(gen => gen.name).join(", ") }}
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          IMDB Link
        </div>
        <div class="value">
          <a :href="`https://www.imdb.com/title/${movie.imdb_id}`" target="_blank">Link</a>
        </div>
      </div>
      <div class="movie-item-info-list">
        <div class="key">
          Homepage Link
        </div>
        <div class="value">
          <a :href="movie.homepage" target="_blank">Link</a>
        </div>
      </div>
    </div>
  </div>
  <div class="movie-item-desc">
    {{ movie.overview }}
  </div>
  <div class="movie-item-credit">
    <h1 class="movie-item-credit-title">
      Credit:
    </h1>
    {{ displayTopCasts }}
  </div>
</template>

<script lang="ts">
import { fetchMovieCredits } from "@/apis/movie";
import type IMovie from "@/model/movie"
import type ICredit from "@/model/credit";
import { defineComponent } from "vue";
import AppLoading from "./common/AppLoading.vue";
import { convertFromByteArrayToSrring } from '@/utils';
import { fetchImages } from '@/apis/images';
import type { IGenre } from "@/model/movie";


type Data = {
  credits: ICredit,
  img: string,
  loading: boolean,
  genres: Array<IGenre>
}

export default defineComponent({
  components: {
    AppLoading
  },
  props: {
    movie: {
      type: Object as () => IMovie,
      required: true
    }
  },
  data: () => <Data>({
    credits: {},
    img: "",
    loading: false,
    genres: [{}]
  }),
  computed: {
    displayTopCasts() {
      return this.credits.cast?.sort((a, b) => a.popularity - b.popularity).reverse().filter((c, index) => index < 10).map(c => c.name).join(" , ")
    }
  },
  async created() {
    await this.getCredits();
    try {
      this.loading = true;
      const img = await fetchImages(this.movie.poster_path, "w500");
      this.img = convertFromByteArrayToSrring(img.data);
    } finally {
      this.loading = false;
    }
    
  },
  methods: {
    async getCredits() {
      try {
        this.loading = true;
        const { data } = await fetchMovieCredits(this.movie.id);
        this.credits = data;
      } finally {
        this.loading = false;
      }
    }
  }
})
</script>


<style scoped>
.movie-item-image img {
  width: 100%;
  /* height: auto; */
  object-fit: cover;
  border-radius: 12px;
}
.movie-item-info-list .key {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
}
.movie-item-info-list .value {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.movie-item-info-list {
  display: flex;
  justify-content: space-between;
  padding: 15px 0 15px;
}
.movie-item-card {
  width: 100%;
  display: flex;
}
.movie-item-image {
  position: relative;
  flex: .4;
}
.movie-item-info {
  flex: .6;
  padding-left: 20px;
}
.movie-item-desc {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 53px;
}
.movie-item-credit {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.movie-item-credit-title {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: 80px;
  margin-bottom: 12px;
}
</style>
