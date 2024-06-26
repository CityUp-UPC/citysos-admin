import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    setUp() {
        const auth = localStorage.getItem('auth');
        if (auth) {
          this.isLogged = JSON.parse(auth).isLogged;
        }
    },
    login() {
      this.isLogged = true
      localStorage.setItem('auth', JSON.stringify({ isLogged: true }));
    },
    logout() {
      this.isLogged = false
      localStorage.removeItem("auth");
    }
  },
});

