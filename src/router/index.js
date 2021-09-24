// library imports //
import { createRouter, createWebHistory } from 'vue-router';

// layouts //
import DashboardLayout from '../layouts/dashboard/DashboardLayout.vue';
import AuthenticationLayout from '../layouts/authentication/AuthenticationLayout.vue';

// views //

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    name: "Dashboard",
    meta: { requiresAuth: true },
    children: [
      
    ]
  },

  {
    path: '/auth',
    component: AuthenticationLayout,
    name: "AuthenticationLayout",
    meta: { requiresAuth: false },
    children: [

    ]
  }
];

// define router //
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
});


export default router
