<template>
  <div id="chat-area">
    <div class="container">
      <div
        v-for="(msg,index) in chat"
        :key="index"
        class="msg"
      >
        <div :class="getMsgClass(msg)">
          <div class="txt">
            <span v-if="msg.name && !msg.type.includes('R')" class="name">{{ msg.name }}</span>
            <span v-else class="name" />
            <span class="timestamp">{{ msg.timestamp }}</span>
            <span class="message">
              {{ msg.message }}
            </span>
          </div>
          <div v-if="msg.type.includes('A')" :class="getMsgArrowClass(msg)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chat: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      receivedMsg: true
    }
  },
  methods: {
    getMsgArrowClass: (msg) => {
      // type: NAL
      // With Name and Arrow - LEFT
      // type: L
      // Without Name nor Arrow - LEFT
      // type NAR
      // With Name and Arrow - RIGHT
      // type: NNAL
      // With Number and Name and Arrow - LEFT
      // type: AR
      // Without Name, With Arrow - RIGHT
      // type: R
      // Without Name nor Arrow - RIGHT
      const types = {
        NAL: { class: 'bubble-arrow' },
        L: { class: '' },
        NAR: { class: 'bubble-arrow alt' },
        NNAL: { class: 'bubble-arrow' },
        AR: { class: 'bubble-arrow alt' },
        R: { class: '' }
      }

      return types[msg.type].class
    },
    getMsgClass: (msg) => {
      // type: NAL
      // With Name and Arrow - LEFT
      // type: L
      // Without Name nor Arrow - LEFT
      // type NAR
      // With Name and Arrow - RIGHT
      // type: NNAL
      // With Number and Name and Arrow - LEFT
      // type: AR
      // Without Name, With Arrow - RIGHT
      // type: R
      // Without Name nor Arrow - RIGHT
      const types = {
        NAL: { class: 'bubble' },
        L: { class: 'bubble follow' },
        NAR: { class: 'bubble alt' },
        NNAL: { class: 'bubble' },
        AR: { class: 'bubble altfollow' },
        R: { class: 'bubble altfollow' }
      }

      return types[msg.type].class
    }
  }
}
</script>

<style lang="scss" scoped>
#chat-area {
  height: 100%;
}
//Remember to compile this file from SCSS to CSS.

body {
  /*I ripped this image from the WhatsApp apk*/
  //background:url(https://i.imgur.com/HdbLL37.png);

  /*This is WhatsApp's official BK color*/
  background: var(--incoming-background);
  font-family: "Helvetica Neue", Helvetica /*, sans-serif*/;
}
.container {
  width: 90%;
  margin: 0 auto;
}

.msg {
  width: 100%;
  height: auto;
  display: block;
  overflow: hidden;

  .bubble {
    float: left;
    max-width: 75%;
    width: auto;
    height: auto;
    display: block;
    background: var(--incoming-background);
    border-radius: 5px;
    position: relative;
    margin: 10px 0 3px 25px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);

    &.alt {
      margin: 10px 25px 3px 0px;
      background: #dcf8c6;
      float: right;
    }
    &.follow {
      margin: 2px 0 3px 25px;
    }

    &.altfollow {
      margin: 2px 25px 3px 0px;
      background: #dcf8c6;
      float: right;
    }
    .txt {
      padding: 8px 0 8px 0;
      width: 100%;
      .name {
        font-weight: 600;
        font-size: 14px;
        display: inline-table;
        padding: 0 0 0 15px;
        margin: 0 0 4px 0;
        color: #3498db;
        span {
          font-weight: normal;
          color: #b3b3b3;
          overflow: hidden;
        }
        &.alt {
          color: #2ecc51;
        }
      }
      .message {
        font-size: 14px;
        font-weight: 500;
        padding: 0 15px 0 15px;
        margin: auto;
        color: #2b2b2b;
        display: table;
      }
      .timestamp {
        font-size: 11px;
        margin: auto;
        padding: 0 15px 0 0;
        display: table;
        float: right;
        position: relative;
        text-transform: uppercase;
        color: #999;
      }
    }
    .bubble-arrow {
      position: absolute;
      float: left;
      left: -11px;
      top: 0px;
      &.alt {
        bottom: 20px;
        left: auto;
        right: 4px;
        float: right;
      }
    }
    .bubble-arrow:after {
      content: "";
      position: absolute;
      border-top: 15px solid var(--incoming-background);
      border-left: 15px solid transparent;
      border-radius: 4px 0 0 0px;
      width: 0;
      height: 0;
      //box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
      //looks like I can't give a shadow to the arrows
    }
    .bubble-arrow.alt:after {
      border-top: 15px solid #dcf8c6;
      transform: scaleX(-1);
    }
  }
}

@media only screen and (max-width: 450px) {
  .container {
    width: 100%;
  }
  .timestamp {
    display: none;
    color: red;
  }
}
</style>
