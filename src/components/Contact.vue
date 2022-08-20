<script setup>
import UserIcon from "../assets/icons/person-fill.svg"

const props = defineProps({ username: String, last_message: Object})

</script>

<template>
  <div class="card">
    <UserIcon class="card-img" />
    <div class="card-rows-container">
      <div class="card-row-1">
        <span class="card-row-1-text">{{username}}</span>
        <span class="card-last-seen">{{last_message.time_sent}}</span>
      </div>
      <div class="card-row-2">
        <span class="card-row-2-text">{{last_message.content}}</span>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 98.9%;
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
}
.card:hover {
  background-color: var(--WhatsappEffectColor);
}
.card-img {
  border-radius: 50%;
  width: 50px !important;
  height: 50px !important;
}
.card-rows-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
}
.card-row-1 {
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
}
.card-row-2 {
  align-items: center;
  width: 100%;
  margin: auto;
}
.card-row-1-text {
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: x-large;
  justify-content: flex-start;
}
.card-last-seen {
  display: flex;
  width: 100%;
  font-weight: lighter;
  font-size: large;
  justify-content: flex-end;
  margin-right: 20px;
}
.card-row-2-text {
  font-size: large;
}
@media screen and (max-width: 600px) {
  .card-img {
    width: 72px;
    height: 72px;
  }
  .card{
    width: 90%;
  }
}
</style>
