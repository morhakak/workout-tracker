<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <Navigation />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navigation from "./components/Navigation.vue";
import { supabase } from "./supabase/init.js";
import { useAuthStore } from "./stores/authStore.js";

const appReady = ref(null);
const store = useAuthStore();

const user = supabase.auth.getUser();

console.log("user", user);

if (!user) {
  appReady.value = true;
}

supabase.auth.onAuthStateChange((event, session) => {
  console.log("hello", event);
  store.setUser(session);
  appReady.value = true;
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
