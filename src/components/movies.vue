<template>
  <div>
    <h1>Películas que no he visto</h1>
     <b-table hover :items="movies">
       <template slot="boton" slot-scope="row">
         <b-button size="sm" @click="markAsSeenMovie(row.item)">Ya la vi</b-button>
       </template>
     </b-table>
  </div>
</template>

<script>
    export default {
      name: "movies",
      computed: {
        movies() { return this.$store.getters.notSeenMovies; }
      },
      methods: {
        markAsSeenMovie(movie){
          this.$store.commit('markAsSeenMovie', movie)
        }
      }
    }
</script>

<style scoped>

</style>
