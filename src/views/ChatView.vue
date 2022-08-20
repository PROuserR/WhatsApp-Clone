<script setup>
import ChatHeader from "../components/ChatHeader.vue";
import ChatBody from "../components/ChatBody.vue";
import ChatFooter from "../components/ChatFooter.vue";
import { ref } from "vue";

const messages = ref([]);
const username = ref("");
const last_seen = ref("");
const last_message = ref({});

const getData = async () => {
  const res = await fetch("http://localhost:3000/messages");
  const data = await res.json();
  const path = window.location.pathname;
  const peer_id = parseInt(path.match(/(\d+)/)[0]);

  for (let message in data.reverse()) {
    if (data[message].my_id === peer_id) {
      last_message.value = data[message];
      let date = new Date(data[message].time_sent);
      last_seen.value = `${date.getHours()}:${date.getMinutes()}`;
      break;
    }
  }
  messages.value = data.map((message) => {
    let date = new Date(message.time_sent);
    message.time_sent = `${date.getHours()}:${date.getMinutes()}`;
    return message;
  });
  messages.value = data.filter((message) => {
    return (
      (message.my_id.toString() === localStorage.getItem("user_id") &&
        message.peer_id.toString() === peer_id.toString()) ||
      (message.peer_id.toString() === localStorage.getItem("user_id") &&
        message.my_id.toString() === peer_id.toString())
    );
  });
  const res2 = await fetch(`http://localhost:3000/users/${peer_id}`);
  const data2 = await res2.json();
  username.value = data2.name;
  messages.value = messages.value.reverse();
};

getData();
</script>

<template>
  <div class="chat-view">
    <ChatHeader :username="username" :last_seen="last_seen" />
    <ChatBody :messages="messages" />
    <ChatFooter
      @getData="getData"
      :messages="messages"
      :last_message="last_message"
    />
  </div>
</template>

<style scoped>
.chat-view {
  width: 100%;
  height: 100vh;
  background: url("../assets/icons/whatsapp-background.png");
  background-size: contain;
}
</style>
