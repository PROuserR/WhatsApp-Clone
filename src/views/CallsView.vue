<script setup>
import DownButton from "../components/DownButton.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <NavBar />
  <p class="calls-view-text">
    To start calling contacts who have Whatsapp.Tap the button at the bottom of
    your screen.
  </p>
  <DownButton />
</template>

<style>
.calls-view-text {
  text-align: center;
  font-size: xx-large;
  color: #7288c5;
  margin-top: 30vh;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  width: 500px;
}
@media screen and (max-width: 600px) {
  .calls-view-text {
    font-size: larger;
    width: 300px;
  }
}
</style>
