<template>
  <div>
    <v-layout class="toolbar-global-css" row>
      <v-row
        no-gutters
        class="toolbar-height"
      >
        <v-col
          class="toolbar-height"
          cols="12"
          sm="2"
          md="2"
          lg="1"
        >
          <v-card id="chats-toolbar" flat>
            <div>
              <v-avatar
                size="40"
                class="toolbar-height"
              >
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col
          class="toolbar-height buttons-area"
          cols="12"
          sm="2"
          md="2"
          lg="2"
        >
          <div align="center" class="align-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z" /></svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z" /></svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" /></svg>
          </div>
          <v-divider vertical class="divider" />
        </v-col>

        <v-col
          cols="12"
          sm="8"
          md="8"
          lg="9"
        >
          <v-card id="active-chat-toolbar" tile outlined>
            <chat-title-toolbar name="Chen Fridel" />
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import chatTitleToolbar from '@/components/toolbar/chatTitleToolbar'
export default {
  components: { chatTitleToolbar }
}
</script>

<style scoped>
.buttons-area {
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
}

.toolbar-global-css {
  background: var(--panel-background);
  margin: auto;
  width: 100vw;
  padding: 0;
  height: 56px;
}

svg {
  color: var(--icon);
  margin: 0.5em;
}

.align-icon {
  padding: 0.5em;
}

.toolbar-height {
  height: 56px;
}

#chats-toolbar {
  background: var(--panel-background);
  width: inherit;
  padding-left: 1em;
  padding-top: 0.5em;
}

#active-chat-toolbar {
  background-color: var(--panel-background);
  width: inherit;
}
.divider {
  background: var(--border-strong);
  transform: translateX(-0.4em);
}
</style>
