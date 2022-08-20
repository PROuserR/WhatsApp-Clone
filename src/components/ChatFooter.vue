<script setup>
import SmileIcon from "../assets/icons/emoji-smile.svg";
import PaperclipIcon from "../assets/icons/paperclip.svg";
import CameraIcon from "../assets/icons/camera-fill.svg";
import MicIcon from "../assets/icons/mic-fill.svg";
import SendIcon from "../assets/icons/send-fill.svg";
import { ref, toRefs } from "@vue/reactivity";

let show_camera_flag = ref(true);
let chat_input = ref("");
const props = defineProps({ messages: Array, last_message: Object });
const { messages } = toRefs(props);
const { last_message } = toRefs(props)
const path = window.location.pathname;
const peer_id = parseInt(path.match(/(\d+)/)[0]);
const emits = defineEmits(["getData"]);
const update = (chat_input) => {
  if (chat_input === "") show_camera_flag.value = true;
  else show_camera_flag.value = false;
};

const send_message = async (input) => {
  await fetch(`http://localhost:3000/messages`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: messages.length + 1,
      my_id: parseInt(localStorage.getItem("user_id")),
      peer_id: peer_id,
      content: input,
      time_sent: new Date(),
    }),
  });
  await fetch(`http://localhost:3000/users/${peer_id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      last_message: last_message.value
    }),
  });
  chat_input.value = "";
  show_camera_flag.value = true;
  emits("getData");
};




</script>

<template>
  <div class="chat-footer">
    <div class="chat-footer-textbox" @keyup.enter="send_message(chat_input)">
      <SmileIcon class="icon" />
      <input
        class="chat-footer-input"
        @input="update(chat_input)"
        v-model="chat_input"
        placeholder="Message.."
      />
      <PaperclipIcon class="icon paperclip-icon" />
      <CameraIcon class="icon" v-if="show_camera_flag" />
    </div>
    <div class="chat-footer-mic-border">
      <MicIcon class="icon mic-icon" v-if="show_camera_flag" />
      <SendIcon
        @click="send_message(chat_input)"
        class="icon mic-icon"
        v-else
      />
    </div>
  </div>
</template>

<style scoped>
.chat-footer {
  display: flex;
  align-items: center;
  position: absolute;
  top: 92vh;
  width: 100%;
}
.chat-footer-textbox {
  display: flex;
  background-color: var(--WhatsappNavBarColor);
  border-radius: 30px;
  width: 95%;
}
.chat-footer-input {
  display: flex;
  text-decoration: none;
  border: none;
  outline: none;
  background: inherit;
  color: inherit;
  font-size: large;
  width: 60%;
}
.chat-footer-mic-border {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--WhatsappBorderColor);
  height: 50px;
  width: 50px;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}
.paperclip-icon {
  margin-left: auto;
}
</style>
