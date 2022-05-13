import { defineStore } from 'pinia';
import type { IGenre } from '@/model/movie';

type State = {
  genres: Array<IGenre>
}

export const useMovieStore = defineStore({
  id: 'movie',
  state: () => <State>({
    genres: []
  }),
  getters: {
    getGenres: (state) => state.genres,
  },
  actions: {
    setGenres(payload: Array<IGenre>) {
      this.genres = payload
    }
  }
})
