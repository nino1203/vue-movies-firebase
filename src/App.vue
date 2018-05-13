<template>
  <div id="app">
    <b-container class="contenedor">
      <b-row>
        <b-col>
          <b-button variant="success">Agregar Película</b-button>
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
  import SeenMovies from "./components/seenMovies";
  import Movies from "./components/movies";

  export default {
    name: 'app',
    components: {Movies, SeenMovies},
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
