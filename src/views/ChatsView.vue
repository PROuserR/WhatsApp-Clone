<script setup>
import { onMounted, ref } from "vue";
import Contact from "../components/Contact.vue";
import DownButton from "../components/DownButton.vue";
import NavBar from "../components/NavBar.vue";
import router from "../router";

const users = ref([]);

const listUsers = async () => {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();
  const my_id = localStorage.getItem("user_id");
  users.value = data.filter((user) => {
    return user.id != my_id;
  });
  for (let index in users.value) {
    users.value[index]["show"] = true;
  }
};

const filterUsers = (search_input) => {
  for (let index in users.value) {
    if(!search_input)
    users.value[index]["show"] = true
    if(!users.value[index].name.includes(search_input))
      users.value[index]["show"] = false
  }
};

onMounted(() => {
  listUsers();
});
</script>

<template>
  <NavBar @filterUsers="filterUsers" />
  <div v-for="user in users">
    <Contact
      v-if="user.show"
      :username="user.name"
      :last_message="user.last_message"
      @click="router.push(`/chat/${user.id}`)"
    />
  </div>
  <DownButton />
</template>
