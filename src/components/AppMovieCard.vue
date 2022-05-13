<template>
  <div class="movie-card" @click="navigateToMoviePage">
    <div class="movie-card-image">
      <img v-if="!loading" class="image" :src="img" />
      <AppLoading v-if="loading" />
    </div>
    <div class="movie-card-info">
      <h1 class="title">{{ movie.title }}</h1>
      <div class="date">{{ movie.release_date }}</div>
      <div class="genres">{{ getGenres }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchImages } from '@/apis/images';
import { defineComponent } from 'vue';
import type IMovie from "../model/movieList";
import type { IGenre } from '@/model/movie';
import AppLoading from "../components/common/AppLoading.vue";
import { convertFromByteArrayToSrring } from '@/utils';

export default defineComponent({
  components: {
    AppLoading
  },
  props: {
    movie: {
      type: Object as () => IMovie,
      required: true
    },
    genres: {
      type: Object as () => Array<IGenre>,
      required: true
    }
  },
  data: () => ({
    img: "",
    loading: false,
  }),
  computed: {
    getGenres() {
      return this.genres.filter(gen => this.movie.genre_ids.includes(gen.id)).map(gen => gen.name).join(", ")
    }
  },
  watch: {
    movie: {
      async handler(nv: IMovie) {
        this.fetchImages(nv)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async fetchImages(item: IMovie) {
      try {
        this.loading = true;
        const img = await fetchImages(item.backdrop_path);
        this.img = convertFromByteArrayToSrring(img.data);
      } finally {
        this.loading = false;
      }
    },
    async navigateToMoviePage() {
      this.$router.push({ path: `/${this.movie.id}` })
    }
  }
})
</script>


<style scoped>
.movie-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 4px;
  border-radius: 6px 0px 0px 6px;
}
.movie-card {
  height: 175px;
  border-radius: 6px;
  background: #F1F1F1;
  border: solid 1px rgba(196, 196, 196, 1);
  display: flex;
  flex-flow: nowrap row;
  overflow: hidden;
  cursor: pointer;
}
.movie-card-image {
  position: relative;
  flex: .4;
  height: 100%;
}
.image {
  border-radius: 10px;
}
.title {
  font-size: 16px;
  font-weight: 700
}
.genres,
.date {
  font-size: 12px;
  font-weight: 400
}
.movie-card-info {
  flex: .6;
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-around;
  padding: 16px 0 0 11px;
}
</style>
