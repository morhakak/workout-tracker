import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const state = {
    user: ref(null),
  };

  function setUser(session) {
    state.user.value = session ? session.user : null;
  }

  return {
    ...state,
    setUser,
  };
});
