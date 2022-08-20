import { createRouter, createWebHistory } from "vue-router";
import ChatsView from "../views/ChatsView.vue";
import StatusView from "../views/StatusView.vue";
import CallsView from "../views/CallsView.vue";
import ChatView from "../views/ChatView.vue";
import LoginView from "../views/LoginView.vue"
import SettingsView from "../views/SettingsView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Chats",
      component: ChatsView,
    },
    {
      path: "/status",
      name: "Status",
      component: StatusView,
    },
    {
      path: "/calls",
      name: "Calls",
      component: CallsView,
    },
    {
      path: "/chat/:user_id",
      name: "Chat",
      component: ChatView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsView,
    },
  ],
});

export default router;
