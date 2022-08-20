<script setup>
import ChatIcon from "../assets/icons/chat-right-text-fill.svg";
import CameraIcon from "../assets/icons/camera-fill.svg";
import CallIcon from "../assets/icons/telephone-plus-fill.svg";
const path = window.location.pathname;
const chatIconVisible = "/" === path;
const cameraIconVisible = "/status" === path;
const callIconVisible = "/calls" === path;
</script>

<template>
  <div class="down-button-border">
    <ChatIcon v-if="chatIconVisible" class="down-button" />
    <CameraIcon v-if="cameraIconVisible" class="down-button" />
    <CallIcon v-if="callIconVisible" class="down-button" />
  </div>
</template>

<style>
.down-button-border {
  position: fixed;
  top: 88vh;
  left: 90vw;
  border-radius: 50%;
  background-color: var(--WhatsappBorderColor);
  height: 60px;
  width: 60px;
  z-index: 1;
}
.down-button {
  width: 26px;
  height: 26px;
  z-index: 100;
  margin-top: 16px;
  margin-left: 16px;
}
@media screen and (max-width: 600px) {
  .down-button-border {
    top: 88vh;
    left: 80.5vw;
  }
}
</style>
