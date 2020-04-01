<template>
  <v-app dark>
    <v-content id="nuxtBackground">
      <v-container id="nuxt">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.nuxt {
  padding: 2em;
  margin: 2em;
}
.nuxtBackground {
  background-color: aliceblue;
}
</style>
