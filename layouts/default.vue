<template>
  <div>
    <v-app class="app-wrapper-web">
      <v-content class="nuxt-container">
        <nuxt />
      </v-content>
      <v-layout class="header-background" />
      <v-layout class="bottom-background" />
    </v-app>
  </div>
</template>

<script>
import '~/assets/style.css'
import '~/assets/styles/scrollbar.css'
export default {
  mounted: () => {
    document.querySelector('html').style.overflowY = 'hidden'
  }
}
</script>
<style scoped>
#padless-marginless {
  padding: 0;
  margin: 0;
}
.header-background {
  background: var(--teal);
  display: block;
  height: 17.5%;
}
.bottom-background {
  background: var(--gray-150);
  display: block;
  height: 82.5%;
}

.nuxt-container {
  font: inherit;
  font-size: 100%;
  outline: none;

  display: flex;
  overflow: hidden;
  left: 2%;
  right: 2%;
  z-index: 200;

  left: 0;
  right: 0;
  position: absolute;
  bottom: 1em;
  margin-right: 4em;
  margin-left: 4em;
  margin-bottom: 1em;
  top: 1em;
}
</style>
