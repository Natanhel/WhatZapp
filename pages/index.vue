<template>
  <div>
    <main-toolbar />
    <v-card raised>
      <v-layout class="fill-all">
        <v-row>
          <v-flex id="chats" flat md4 sm4 lg3>
            <conversations-list />
          </v-flex>
          <v-flex id="activeChat" md8 sm8 lg9>
            <active-conversation />
          </v-flex>
        </v-row>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import activeConversation from '@/components/activeConversation'
import conversationsList from '@/components/conversationsList'
import mainToolbar from '@/components/toolbar/mainToolbar'
export default {
  components: {
    activeConversation,
    conversationsList,
    mainToolbar
  }
}
</script>

<style scoped>
#header {
  color: black;
  background: var(--background-app);
  padding: 0;
  margin: 0;
}

#chats {
  color: black;
  background: white;
  height: inherit;
}

#activeChat {
  color: black;
  background-image: url(https://i.redd.it/qwd83nc4xxf41.jpg);
  background-size: 50%;
  background-repeat: repeat;
  box-shadow: inset 0 0 0 2000px rgba(229, 221, 213, 0.7);
  background-color: var(--conversation-panel-background);
  background-blend-mode: multiply;
  height: 100vh;
}

.fill-all {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
