import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:movieId',
      name: 'Movie',
      component: import("../pages/movieId/index.vue")
    }
  ]
})

export default router
