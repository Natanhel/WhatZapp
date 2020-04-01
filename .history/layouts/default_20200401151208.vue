<template>
  <v-app>
    <v-content class="nuxt-color">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import css from '~/assets/style'
export default {
  components: {
    css
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.nuxt-color {
  background: red;
}
</style>
