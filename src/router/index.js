import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/RegisterView.vue'
import {useUserStore} from "@/stores/useStore.js";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: RegisterView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      redirect: '/admin'
    },
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isLogged) {
    next('/login');
  } else if (!to.meta.requiresAuth && userStore.isLogged && to.path === '/login') {
    next('/admin');
  } else {
    next();
  }
});

export default router
