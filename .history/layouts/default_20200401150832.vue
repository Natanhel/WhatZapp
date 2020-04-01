<template>
  <v-app>
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
  background-color: aliceblue !important;
}
.nuxtBackground {
  background-color: aliceblue !important;
}
</style>
