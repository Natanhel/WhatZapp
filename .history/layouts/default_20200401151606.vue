<template>
  <v-app>
    <v-content class="teal">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import '~/assets/style.css'
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
div.twocolorish {
  background-color: grey;
  border-top: 20px solid teal;
}
</style>
