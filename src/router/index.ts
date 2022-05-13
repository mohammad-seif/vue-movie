import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/:movieId',
      name: 'Movie',
      props: (route) => ({ id: route.params.movieId }),
      component: import("../pages/movieId/index.vue")
    }
  ]
})

export default router
