import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';
import App from './App.vue';
import ToastService from 'primevue/toastservice';

import { createPinia } from 'pinia';
import { definePreset } from '@primevue/themes';
import Toast from 'primevue/toast';
import router from '@/router/index.js';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ProgressSpinner from 'primevue/progressspinner';


import './index.css';

// Import PrimeVue CSS
import 'primeicons/primeicons.css';
import '@primevue/themes/lara';

const pinia = createPinia();

const MyPreset = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{red.50}',
            100: '{red.100}',
            200: '{red.200}',
            300: '{red.300}',
            400: '{red.400}',
            500: '{red.500}',
            600: '{red.600}',
            700: '{red.700}',
            800: '{red.800}',
            900: '{red.900}',
            950: '{red.950}',
        },
    },
});

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark',
        }
    },
    options: {
        cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
        }
    },
    pt: {
        slider: {
            handle: { class: 'bg-primary text-primary-contrast' }
        }
    }
})
    .use(ToastService)
    .component('pv-toast', Toast)
    .component('pv-button', Button)
    .component('pv-input', InputText)
    .component('pv-spinner', ProgressSpinner)
    .component('pv-input-text', InputText)
    .use(router)
    .use(pinia)
    .mount('#app');