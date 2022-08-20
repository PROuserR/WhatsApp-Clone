<script setup>
import ArrowIcon from "../assets/icons/arrow-left.svg";
import VideoIcon from "../assets/icons/camera-video-fill.svg";
import CallIcon from "../assets/icons/telephone-fill.svg";
import DotsIcon from "../assets/icons/three-dots-vertical.svg";
import UserIcon from "../assets/icons/person-fill.svg";
import { RouterLink } from "vue-router";
import { toRefs } from "@vue/reactivity";

const props = defineProps({ username: String, last_seen: String });
const { username } = toRefs(props);
const { last_seen } = toRefs(props);
</script>

<template>
  <div class="chat-header">
    <RouterLink class="arrow-icon-link" to="/"
      ><ArrowIcon class="icon"
    /></RouterLink>
    <div class="chat-header-contact">
      <UserIcon class="card-img" />
      <div class="chat-header-contact-row-container">
        <span class="chat-header-contact-row-1-text">{{ username }}</span>
        <span class="chat-header-contact-row-2-text"
          v-if="last_seen">last seen today at {{ last_seen }}</span
        >
      </div>
    </div>
    <div class="chat-header-icons">
      <VideoIcon class="icon" />
      <CallIcon class="icon" />
      <DotsIcon class="icon" />
    </div>
  </div>
</template>

<style scoped>
.chat-header {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--WhatsappNavBarColor);
}
.chat-header-contact {
  display: flex;
}
.chat-header-contact-img {
  border-radius: 50%;
  width: 72px;
  height: 72px;
}
.chat-header-contact-row-container {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
  width: 150%;
}
.chat-header-contact-row-1-text {
  font-weight: bolder;
  font-size: x-large !important;
}
.chat-header-contact-row-2-text {
  font-size: large !important;
}
.chat-header-icons {
  display: flex;
  margin-left: auto;
}
.arrow-icon-link {
  color: inherit;
}
@media screen and (max-width: 600px) {
  .chat-header-contact-img {
    width: 50px;
    height: 50px;
  }
  .chat-header-contact-row-1-text {
    font-size: larger;
  }
  .chat-header-contact-row-2-text {
    font-size: small;
  }
}
</style>
