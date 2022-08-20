<script setup>
import PlusIcon from "../assets/icons/plus-circle-fill.svg";
</script>

<template>
  <div class="card">
    <div>
      <img
        class="card-img"
        src="https://media.gettyimages.com/photos/tibetan-lake-at-morning-twilight-with-starry-sky-picture-id1403795496?s=2048x2048"
      />
      <PlusIcon class="plus-icon" />
    </div>

    <div class="card-rows-container">
      <div class="card-row-1">
        <span class="card-row-1-text">My Status</span>
      </div>
      <div class="card-row-2">
        <span class="card-row-2-text">Tap to add status update</span>
      </div>
    </div>
  </div>
</template>

<style>
.my-status-img {
  border-radius: 50%;
  width: 108px;
  height: 108px;
}
.plus-icon {
  width: 36px;
  height: 36px;
  position: absolute;
  top: 190px;
  left: 80px;
}
@media screen and (max-width: 600px) {
  .plus-icon {
    width: 30px;
    height: 30px;
    top: 155px;
    left: 55px;
  }
}
</style>
