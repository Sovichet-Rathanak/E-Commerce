import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLogIn: false,
  }),
  actions: {
    login(user) {
      this.user = user;
      this.isLogIn = true;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.user = null;
      this.isLogIn = false;
      localStorage.removeItem("user");
    },
    loadUserFromLocalStorage() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
          this.user = JSON.parse(storedUser); 
          this.isLogIn = true;
      }
    },
  },
});
