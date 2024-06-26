<template>
  <div class="max-w-md mx-auto p-4">
    <form v-on:submit="login($event)" class="bg-white shadow-xl rounded px-8 pt-6 pb-8">
      <div class="flex flex-col space-y-6">
        <div class="flex justify-center">
          <img class="h-8 w-auto" src="/logo.png" alt="Logo">
        </div>
        <div>
          <h1 class="text-center font-bold text-3xl">CitySOS Admin</h1>
        </div>
        <div class="w-full">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
            Usuario
          </label>
          <pv-input id="email" class="w-full" v-model="username" placeholder="" required />
        </div>
        <div class="w-full">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
            Contraseña
          </label>
          <div class="flex w-full">
            <pv-input id="password"
                      class="w-full"
                      v-model="password"
                      :type="this.isPassword"
                      placeholder="••••••••••••" required
            />
            <pv-button
                :icon="this.isPassword === 'password' ? 'pi pi-eye' : 'pi pi-eye-slash'"
                severity="secondary"
                @click="switchVisiblePassword"
            />
          </div>
        </div>
        <pv-button type="submit"
                   :label="isLoggingIn ? 'Validando' : 'Iniciar sesión'"
                   :disabled="isLoggingIn"
        />
      </div>
    </form>
  </div>
</template>

<script>
import {useUserStore} from "@/stores/useStore.js";

export default {
  name: "About",
  data() {
    return {
      username: '',
      password: '',
      isPassword: 'password',
      isLoggingIn: false,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      this.isLoggingIn = true;

      if (this.username === 'admin' && this.password === 'admin') {
        const userStore = useUserStore();
        userStore.login();
        this.$router.push('/');
      } else {
        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Usuario o contraseña incorrectos', life: 1000});
      }
      this.isLoggingIn = false;
    },
    switchVisiblePassword() {
      this.isPassword = this.isPassword === 'password' ? 'text' : 'password';
    }
  }
}
</script>