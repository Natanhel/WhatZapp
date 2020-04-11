<template>
  <div id="active-conversation">
    <v-layout column class="active-conversation-layout">
      <chat-area id="chat-area-scroll" :chat="activeChat" />
      <input-area />
    </v-layout>
  </div>
</template>

<script>
import chatArea from '@/components/activeChat/chatArea'
import inputArea from '@/components/activeChat/inputArea'
export default {
  components: { chatArea, inputArea },
  computed: {
    activeChat () {
      return this.$store.getters.activeChat
    }
  }
}
</script>

<style scoped>
.active-conversation-layout {
  height: 100vh;
}
#chat-area-scroll{
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
}
</style>
