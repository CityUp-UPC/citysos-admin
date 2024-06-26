<template>
  <pv-toast />
  <div class="container mx-auto py-8 px-2">
    <RouterView />
  </div>
</template>

<script>
import {useUserStore} from "@/stores/useStore.js";
export default {
  data() {
    return {
      isLogged: false,
    };
  },
  created() {
    const isLogged = localStorage.getItem("auth");

    if (isLogged) {
      this.user = JSON.parse(isLogged).user;
    }
  },
  computed: {
    isLogged() {
      return useUserStore().isLogged;
    }
  },
  watch: {
    storeAuth(isLogged) {
      if (isLogged) {
        this.isLogged = isLogged;
      }
    }
  },
  mounted() {
    const userStore = useUserStore();
    const userData = localStorage.getItem('auth');

    if (userData) {
      userStore.setUp();
    }
  },
}
</script>
