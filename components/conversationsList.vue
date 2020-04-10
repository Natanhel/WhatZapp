<template>
  <div id="conversation-list">
    <!-- Conversations List -->
    <div id="search-container">
      <v-text-field
        id="search-chat"
        background-color="white"
        prepend-inner-icon="search"
        label="Search or start new chat"
        rounded
        outlined
        dense
      >
        <v-icon>search</v-icon>
      </v-text-field>
    </div>
    <v-content>
      <v-layout
        id="scroll-chat"
        column
      >
        <v-flex
          v-for="(chat,index) in chats"
          :key="index"
        >
          <conversation-node
            :icon="chat.icon"
            :chat-name="chat.chatName"
            :chat-latest="chat.chatLatest"
          />
          <v-divider class="chats-divider" />
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
import conversationNode from '@/components/conversationNode'
export default {
  components: { conversationNode },
  data () {
    return {
      chats: require('@/assets/chats.json').chats
    }
  }
}
</script>

<style>
#conversation-list {
  padding-left: 1em;
}
#scroll-chat {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 78vh;
}
.chats-divider {
  background: var(--border-chatlist);
}
#search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--panel-background-lighter);
  padding-top: 1.5em;
  height: 3.3em;
  padding-left: 1em;
  padding-right: 1em;
}
.v-input__slot .v-icon {
  color: var(--input-placeholder);
  transform: scale(0.75);
}
.v-input__slot .v-label {
  color: var(--input-placeholder);
  font-weight: 100;
  font-size: 15px;
  padding-top: 0.2em;
}

/* TODO animate search bar */
</style>
