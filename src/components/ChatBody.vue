<script setup>
import { toRefs } from "@vue/reactivity";
import { watch } from "vue";

const props = defineProps({
  messages: Array,
});
const { messages } = toRefs(props);
const my_id = parseInt(localStorage.getItem("user_id"))

</script>

<template>
  <div class="chat-body-container">
    <div v-for="message in messages">
      <div v-if="message.my_id === my_id" class="chat-body-my-message">
        <span>{{ message.content }}</span>
        <span class="message-time-sent">{{ message.time_sent }}</span>
      </div>
      <div v-else class="chat-body-peer-message">
        <span>{{ message.content }}</span>
        <span class="message-time-sent">{{ message.time_sent }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.chat-body-container {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  height: 75vh;
  overflow-y: auto;
}
.chat-body-peer-message {
  border-radius: 25px;
  margin-left: 25px;
  margin-bottom: 25px;
  padding: 12px;
  background-color: var(--WhatsappNavBarColor);
  width: fit-content;
  height: fit-content;
  font-size: larger;
}
.chat-body-my-message {
  display: flex;
  border-radius: 25px;
  margin-left: auto;
  margin-right: 25px;
  margin-bottom: 25px;
  padding: 12px;
  background-color: var(--WhatsappBorderColor);
  width: fit-content;
  height: fit-content;
  font-size: larger;
}
.message-time-sent{
  font-size: small;
  margin-left: 10px;
  margin-top: 20px;
}
</style>