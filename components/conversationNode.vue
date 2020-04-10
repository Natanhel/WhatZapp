<template>
  <div>
    <v-btn id="chat-sizes" class="d_color" width="100%" text @click="openChat">
      <v-row>
        <v-icon v-if="icon === ''" class="scale-icon padding-icon d_color toolbar-height">
          account_circle
        </v-icon>
        <div v-else class="padding-icon d_color toolbar-height">
          <v-avatar
            size="49"
            class="toolbar-height"
          >
            <img
              :src="icon"
              style="width: 49px; height: 49px;"
            >
          </v-avatar>
        </div>

        <v-col>
          <v-row>
            <!-- TODO Add hints -->
            <h4 class="chat-name">
              {{ chatName }}
            </h4>
          </v-row>
          <v-row>
            <!-- TODO Add hints -->
            <h5 class="chat-latest">
              {{ chatLatest }}
            </h5>
          </v-row>
        </v-col>
      </v-row>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    },
    chatName: {
      type: String,
      required: false,
      default: 'empty chat'
    },
    chatLatest: {
      type: String,
      required: false,
      default: 'empty information'
    }
  },
  methods: {
    openChat () {
      // TODO open the main chat via Vuex
    }
  }
}
</script>

<style scoped>
.scale-icon {
  transform: scale(2.5);
  margin-right: 0.7em;
  margin-left: 0.2em;
}
.padding-icon {
  margin-top: 0.5em;
  padding-left: 0.3em;
}
.d_color {
  color: gray;
}
#chat-sizes {
  background: white;
  border-color: gray;
  margin: 0;
  padding: 0;
  height: 72px;
  padding-left: 1em;
}
.chat-name {
  padding-left: 1em;
  font-size: 17px;
  font-family: "Segoe UI", "Helvetica Neue", "Helvetica", "Lucida Grande", Arial,
    "Ubuntu", "Cantarell", "Fira Sans", sans-serif;
  font-weight: 400;
}
.chat-latest {
  padding-left: 1.5em;
  font-size: 14px;
  font-weight: 300;
  font-family: "Segoe UI", "Helvetica Neue", "Helvetica", "Lucida Grande", Arial,
    "Ubuntu", "Cantarell", "Fira Sans", sans-serif;
}
</style>
