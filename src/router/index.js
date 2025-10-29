import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Inicio.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import('../pages/Proyectos.vue')
  },
  {
    path: '/experiencia',
    name: 'Experiencia',
    component: () => import('../pages/Experiencia.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../pages/Contacto.vue')
  },
  {
    path: '/sobre-mi',
    name: 'SobreMi',
    component: () => import('../pages/SobreMi.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router