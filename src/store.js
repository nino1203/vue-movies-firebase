import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    seenMovies: [],
    movies: []
  },
  getters: {
    notSeenMovies(state){
      return state.movies.filter(
        (movie) => {
          return movie.visto === 'false';
        }
      );
    },
    seenMovies(state){
      return state.seenMovies;
    }
  },
  mutations: {
    setMovies(state, movies){
      state.movies = movies;
      for(var k in state.movies){
         if(state.movies[k].visto === "true"){
           this.commit("markAsSeenMovie", state.movies[k])
         }
      }
    },
    markAsSeenMovie(state, movie){
        movie.visto = true;
        state.seenMovies.push({ nombre: movie.nombre, tipo: movie.tipo, genero: movie.genero, visto: movie.visto,
          boton: ''
      })
    },
    markAsNotSeenMovie(state, notSeenMovie){
      const movie = state.movies.find(
        movie => {
          return movie.nombre === notSeenMovie.nombre;
        }
      );
      movie.visto = 'false';
      state.seenMovies.splice(state.seenMovies.indexOf(notSeenMovie), 1)
    }
  },
  actions: {
    getJsonMovies(context) {
      const url = 'static/movies.json';
       Vue.http.get(url).then(function(response){
        context.commit('setMovies', response.body);
      })
    }
  }
});
