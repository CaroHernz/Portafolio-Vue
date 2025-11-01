<template>
  <nav class="floating-nav">
    <div class="nav-container">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        :class="['nav-icon', { 'active': $route.path === item.path }]"
        :title="item.label"
        class="navbar-item">
        <i :class="item.icon"></i>
      </router-link>
      <button 
        @click="toggleAuthModal" 
        class="navbar-item" 
        :class="['nav-icon', 'auth-button']" 
        :title="authStore.user ? 'Cerrar Sesión' : 'Iniciar Sesión'">
        <i :class="authStore.user ? 'fa-solid fa-right-to-bracket fa-xl py-3' : 'fa-solid fa-key fa-xl py-3'"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Props y Emits
const emit = defineEmits(['open-auth-modal'])

// Store y route
const route = useRoute()
const authStore = useAuthStore()

// Menu items
const menuItems = [
  { 
    path: '/', 
    label: 'Inicio',
    icon: 'fa-solid fa-house fa-xl'
  },
  { 
    path: '/sobre-mi', 
    label: 'Sobre Mí',
    icon: 'fa-regular fa-user fa-xl'
  },
  { 
    path: '/experiencia', 
    label: 'Experiencia',
    icon: 'fa-solid fa-briefcase fa-xl'      
  },
  { 
    path: '/proyectos', 
    label: 'Proyectos',
    icon: 'fa-regular fa-folder-open fa-xl'
  },
  { 
    path: '/contacto', 
    label: 'Contacto',
    icon: 'fa-regular fa-envelope fa-xl'
  }
]

// Métodos
const toggleAuthModal = () => {
  emit('open-auth-modal')
}
</script>

<style scoped>
/* Floating Navbar Styles */
.floating-nav {
  position: fixed;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 1000;
  opacity: 1;
}

.nav-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--off-white);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 12px;
  color: var(--accent-color);
  transition: all 0.3s ease;
  position: relative;
}

.nav-icon:hover {
  background-color: var(--icon-hover);
  color: var(--icon-active-text);
  transform: translateY(-2px);
}
.nav-icon i {
  padding: 0.75rem 0;
}
.nav-icon.active {
  background-color: var(--icon-active);
  color: var(--icon-active-text);
}

.nav-icon::after {
  content: attr(title);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  background-color: var(--text-color);
  color: var(--off-white);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1001;
}

.nav-icon::before {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(5px);
  border: 5px solid transparent;
  border-right-color: var(--text-color);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1001;
}

.nav-icon:hover::after,
.nav-icon:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(0);
}

/* Responsive para tablets y móviles */
@media screen and (max-width: 768px) {
  .floating-nav {
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav-container {
    flex-direction: row;
    padding: 0.9rem 1.5rem;
    gap: 0.5rem;
  }

  .nav-icon {
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
  }

  /* Ocultar tooltips en móvil */
  .nav-icon::after,
  .nav-icon::before {
    display: none;
  }
}

/* Para pantallas muy pequeñas */


@media screen and (max-width: 480px) {
  .floating-nav {
    top: 1rem;
  }

  .nav-container {
    padding: 0.6rem 1.5rem;
    gap:0.5rem
  }

  .nav-icon {
    padding: 0;
    font-size: 0.9rem;
    width: 2.5rem;
    height: 2.5rem;
  }
}

.auth-button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>