<script setup>
import SearchIcon from "../assets/icons/search.svg";
import DotsIcon from "../assets/icons/three-dots-vertical.svg";
import CameraIcon from "../assets/icons/camera-fill.svg";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const show_settings_flag = ref(false);
const show_search_bar = ref(false);
let search_input = ref("");
const emits = defineEmits(["filterUsers"]);
const logout = () => {
  localStorage.clear()
  window.location.reload()
}

const update = (search_input) => {
  emits("filterUsers", search_input);
}
const path = window.location.pathname;
const chatsViewVisible = "/" === path;
const statusViewVisible = "/status" === path;
const callsViewVisible = "/calls" === path;
</script>

<template>
  <div id="navbar">
    <div id="navbar-row-1">
      <div id="navbar-title" v-if="!show_search_bar">WhatsApp</div>
      <div id="navbar-icons">
        <SearchIcon  @click="show_search_bar = !show_search_bar" class="icon" />
        <input @input="update(search_input)" v-model="search_input" v-if="show_search_bar" class="navbar-search-bar" placeholder="Search.." />
        <DotsIcon
          @click="show_settings_flag = true"
          class="icon"
        />
      </div>
      <div v-if="show_settings_flag" id="navbar-settings">
        <RouterLink to="/settings" class="navbar-settings-row">Settings</RouterLink>
        <span class="navbar-settings-row" @click="logout">Logout</span>
        <span class="navbar-settings-row" @click="show_settings_flag = false">Close</span>
      </div>
    </div>
    <div id="navbar-row-2">
      <CameraIcon class="navbar-camera icon" />
      <RouterLink
        to="/"
        class="navbar-page"
        :style="
          chatsViewVisible
            ? '  border-bottom: 4px solid var(--WhatsappBorderColor);'
            : '  border-bottom: none'
        "
      >
        <div>CHATS</div>
      </RouterLink>
      <RouterLink
        to="/status"
        class="navbar-page"
        :style="
          statusViewVisible
            ? '  border-bottom: 4px solid var(--WhatsappBorderColor);'
            : '  border-bottom: none'
        "
      >
        <div>STATUS</div>
      </RouterLink>
      <RouterLink
        to="/calls"
        class="navbar-page"
        :style="
          callsViewVisible
            ? '  border-bottom: 4px solid var(--WhatsappBorderColor);'
            : '  border-bottom: none'
        "
      >
        <div>CALLS</div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
#navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--WhatsappNavBarColor);
  color: var(--WhatsappFontColor);
}
#navbar-row-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
#navbar-row-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
#navbar-settings {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: var(--WhatsappBackgroundColor);
  padding: 20px;
  left: 72%;
  top: -3%;
  box-shadow: 1px 1px 1px 1px black;
  color: white;
  width: fit-content;
}
.navbar-search-bar{
  position: absolute;
  left: 15px;
  top: 15px;
  outline: none;
  border: none;
  background: transparent;
  color: white;
  font-size: x-large;
  width: 70%;
}
.navbar-page {
  margin: auto auto 0;
  width: 25%;
  text-align: center;
  font-size: 125%;
  padding-bottom: 15px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.navbar-page:hover {
  border-bottom: 4px solid var(--WhatsappBorderColor);
}
.navbar-settings-row {
  font-size: larger;
  margin-top: 10px;
  padding: 4px;
  color: white;
  text-decoration: none;
}
.navbar-camera {
  width: 10%;
  text-align: center;
  font-size: larger;
}
.navbar-camera:hover {
  border-bottom: 4px solid var(--WhatsappBorderColor);
}
#navbar-title {
  width: 100%;
  margin-left: 10px;
  font-size: 170%;
}
#navbar-icons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.icon {
  width: 4vw;
  height: 4vh;
  margin: 10px;
}
@media screen and (max-width: 600px) {
  .icon {
    width: 5vw;
    height: 5vh;
    margin: 10px;
  }
}
</style>
