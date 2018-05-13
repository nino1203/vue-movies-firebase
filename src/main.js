import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from "firebase"

import { store } from './store'
import router from './router'

Vue.use(BootstrapVue);
Vue.use(VueResource);

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAZZgub-x7bDkGvG6VZ_BZZ1UMV9l30ZN4",
  authDomain: "movies-6f98f.firebaseapp.com",
  databaseURL: "https://movies-6f98f.firebaseio.com",
  projectId: "movies-6f98f",
  storageBucket: "movies-6f98f.appspot.com",
  messagingSenderId: "51791857528"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
