<template>
  <div class="max-w-md mx-auto p-4">
    <div class="flex justify-center">
      <img class="h-8 w-auto" src="/logo.png" alt="Logo">
    </div>
    <h2 class="text-2xl font-bold mb-4 text-center">Registrar Policía</h2>
    <form @submit.prevent="register" class="space-y-4">
      <div class="flex gap-4">
        <div>
          <label class="block mb-1">Username</label>
          <pv-input-text v-model="username" class="w-full" required />
        </div>
        <div>
          <label class="block mb-1">Password</label>
          <pv-input-text v-model="password" type="password" class="w-full" required />
        </div>
      </div>
      <div>
        <label class="block mb-1">Nombres</label>
        <pv-input-text v-model="firstName" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">Apellidos</label>
        <pv-input-text v-model="lastName" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">DNI</label>
        <pv-input-text v-model="dni" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">Correo</label>
        <pv-input-text v-model="email" type="email" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">Teléfono</label>
        <pv-input-text v-model="phoneNumber" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">Distrito asignado</label>
        <pv-input-text v-model="assignedDistrict" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">Rango de policía</label>
        <pv-input-text v-model="policeRank" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">ID de policía</label>
        <pv-input-text v-model="policeIdentifier" class="w-full" required />
      </div>
      <div>
        <label class="block mb-1">Entidad de policía</label>
        <pv-input-text v-model="entityPolice" class="w-full" required />
      </div>
      <pv-button
          class="w-full"
          label="Registrar policía"
          :loading="isRegistering"
          type="submit"
      />
      <pv-button
          severity="contrast"
          class="w-full mt-2"
          label="Logout"
          @click="logout"
      />
    </form>
  </div>
</template>

<script>

import {useUserStore} from "@/stores/useStore.js";
import {PoliceService} from "@/services/police-service.js";

export default {
  name: "RegisterView",
  data() {
    return {
      isPassword: 'password',
      isRegistering: false,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      dni: '',
      deviceToken: '',
      assignedDistrict: '',
      policeRank: '',
      policeIdentifier: '',
      entityPolice: '',
      policeService: new PoliceService()
    };
  },
  methods: {
    register(event) {
      event.preventDefault();
      this.isRegistering = true;

      this.policeService.registerPolice(
          this.username,
          this.password,
          this.firstName,
          this.lastName,
          this.email,
          this.phoneNumber,
          this.dni,
          this.deviceToken,
          this.assignedDistrict,
          this.policeRank,
          this.policeIdentifier,
          this.entityPolice
      ).then(() => {
        this.isRegistering = false;
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.phoneNumber = '';
        this.dni = '';
        this.deviceToken = '';
        this.assignedDistrict = '';
        this.policeRank = '';
        this.policeIdentifier = '';
        this.entityPolice = '';
        this.$toast.add({severity: 'success', summary: 'Registro exitoso', detail: 'El policía ha sido registrado correctamente', life: 1000});
      }).catch(() => {
        this.$toast.add({severity: 'error', summary: 'Error', detail: 'No se pudo registrar al policía', life: 1000});
        this.isRegistering = false;
      });


      this.isRegistering = false;
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
      this.$router.push('/login');
    },
  },
}
</script>

