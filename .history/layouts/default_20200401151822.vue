<template>
  <v-app>
    <v-content class="nuxt-background">
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
.nuxt-background {
  background: --gray-300;
  border-top: 8em solid teal;
}
</style>
