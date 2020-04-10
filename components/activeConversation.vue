<template>
  <div id="active-conversation">
    <v-layout column class="active-conversation-layout">
      <chat-area />
      <input-area />
    </v-layout>
  </div>
</template>

<script>
import chatArea from '@/components/activeChat/chatArea'
import inputArea from '@/components/activeChat/inputArea'
export default {
  components: { chatArea, inputArea }
}
</script>

<style scoped>
.active-conversation-layout {
  height: 100vh;
}
</style>
