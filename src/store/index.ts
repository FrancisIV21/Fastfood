import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as null | { name: string; email: string },
  }),
  actions: {
    login(email: string, password: string) {
      // Simulate API call
      if (email && password) {
        this.isAuthenticated = true;
        this.user = { name: 'Demo User', email };
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
