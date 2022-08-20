<script setup>
import CameraIcon from "../assets/icons/camera-fill.svg";
import EmojiIcon from "../assets/icons/emoji-smile.svg";

let username = "";
const login = async (username) => {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();
  let user_found = false;
  for (let user in data) {
    if (username === data[user].name) {
      localStorage.setItem("user_id", data[user].id);
      user_found = true;
    }
  }
  if (!user_found) {
    localStorage.setItem("user_id", data.length + 1);
    await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: data.length + 1,
        name: username,
      }),
    });
  }
  window.location.reload();
};
</script>

<template>
  <h2 class="login-info">Profile Info</h2>
  <h4 class="login-info">
    Please provide your name and an optional profile photo
  </h4>
  <div class="login-profile">
    <div class="login-profile-photo-border">
      <CameraIcon class="icon photo-icon" />
    </div>
    <input class="login-profile-input" v-model="username" />
    <EmojiIcon class="login-emoji-icon icon" />
  </div>
  <div class="login-next-button-container">
    <button @click="login(username)" class="login-next-button">Next</button>
  </div>
</template>

<style scoped>
.login-info {
  text-align: center;
  color: rgb(68, 128, 68);
}
.login-profile {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-profile-input {
  width: 70%;
  border: none;
  outline: none;
  background: transparent;
  color: rgb(68, 128, 68);
  font-size: larger;
  border-bottom: 3px solid rgb(68, 128, 68);
}
.login-profile-photo-border {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin-inline: 10px;
}
.login-next-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
}
.login-next-button {
  background-color: rgb(0, 175, 0);
  color: inherit;
  border: none;
  width: 64px;
  height: 30px;
}
.login-emoji-icon {
  color: rgb(68, 128, 68);
}
</style>
