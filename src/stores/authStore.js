import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(session) {
      if (session && session.user) {
        this.user = session.user;
      } else {
        this.user = null;
      }
    },
  },
});
