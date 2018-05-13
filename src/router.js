import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/home'
import movies from '@/components/movies'
import seenMovies from '@/components/seenMovies'
import addMovie from '@/components/addMovie'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: home },
    { path: '/addMovie', name: 'AddMovie', component: addMovie },
    { path: '/movies', name: 'AddMovie', component: movies },
    { path: '/seenMovies', name: 'AddMovie', component: seenMovies }
  ]
})
