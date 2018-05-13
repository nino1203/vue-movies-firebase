<template>
  <div>
    <h1>Películas que ya vi</h1>
    <b-table hover :items="seenMovies">
      <template slot="boton" slot-scope="row">
        <b-button size="sm" @click="markAsNotSeenMovie(row.item)">No la vi!</b-button>
      </template>
    </b-table>
    </div>
</template>

<script>
export default {
  name: "seenMovies",
  computed: {
    seenMovies(){ return this.$store.getters.seenMovies }
  },
  methods: {
    markAsNotSeenMovie(notSeenMovie){
      this.$store.commit('markAsNotSeenMovie', notSeenMovie)
    }
  }
}
</script>

<style scoped>

</style>
