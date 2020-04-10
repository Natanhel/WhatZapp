<template>
  <div>
    <v-card id="chats-toolbar" class="toolbar-height" flat>
      <v-row no-gutters>
        <v-col
          id="chat-name"
          cols="12"
          sm="9"
        >
          <v-avatar
            size="40"
            class="toolbar-height"
          >
            <img
              :src="img"
              alt="John"
            >
          </v-avatar>
          {{ name }}
        </v-col>
        <v-col
          id="align-buttons"
          cols="12"
          sm="2"
        >
          <v-icon class="icon-grey">
            search
          </v-icon>
          <v-icon id="attach_rotate" class="icon-grey">
            attach_file
          </v-icon>
          <v-icon class="icon-grey">
            more_vert
          </v-icon>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: 'Chat Name'
    },
    img: {
      type: String,
      required: false,
      default: 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg'
    }
  }
}
</script>

<style scoped>
#chats-toolbar {
  color: black;
  background: var(--panel-background);
  background-color: var(--panel-background) !important;
  width: inherit;
}

.toolbar-height {
  height: 56px;
}
#chat-name {
  padding-top: 0.5em;
}
#attach_rotate {
  transform: rotate(45deg);
}
.icon-grey {
  color: var(--icon);
  margin-left: 1em;
}
#align-buttons {
  display: flex;
  justify-content: flex-end;
  padding-right: 3.5em;
}
</style>
