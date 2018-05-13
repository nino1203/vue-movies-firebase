<template>
    <div>
      <b-container class="contenedor">
        <h1>Home</h1>
        <b-row>
          <b-col>
            <router-link to="/addMovie">
              <b-button variant="success">Agregar Película</b-button>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="movies">
          <b-col col="6"><movies class="recuadro"></movies></b-col>
          <b-col col="6"><seenMovies class="recuadro"></seenMovies></b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
  import seenMovies from "./seenMovies";
  import movies from "./movies";

  export default {
    name: "home",
    components: {movies, seenMovies},
    created: function() {
      this.$store.dispatch('getJsonMovies');
    }
  }
</script>

<style>
  .recuadro {
    padding: 10px;
  }
  .movies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .contenedor{
    margin: 10px;
  }
</style>
