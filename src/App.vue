<script setup>
import { RouterView } from "vue-router";
import router from "./router";
import { ref } from "vue";

let user_id = ref(localStorage.getItem("user_id"));
if (!user_id.value) router.push("/login");
else router.push("/");
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
