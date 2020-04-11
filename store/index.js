/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
export const state = () => ({
  activeChat: [],
  activeIcon: "",
  activeChatName: ""
});

export const getters = {
  activeIcon: state => {
    return state.activeIcon;
  },
  activeChatName: state => {
    return state.activeChatName;
  },
  activeChat: state => {
    return state.activeChat;
  }
};

export const mutations = {
  updateIcon: (state, icon) => {
    state.activeIcon = icon;
  },
  updateChatName: (state, chatName) => {
    state.activeChatName = chatName;
  },
  updateChat: (state, { chat, icon, chatName }) => {
    state.activeChat = chat;
    state.activeIcon = icon;
    state.activeChatName = chatName;
  }
};

export const actions = {
  updateActiveChat({ commit }, { chatName, icon, chat }) {
    commit("updateChatName", chatName);
    commit("updateIcon", icon);
    commit("updateChat", chat);
  }
};
