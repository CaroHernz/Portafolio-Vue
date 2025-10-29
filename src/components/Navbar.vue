<template>
    <nav className="floating-nav">
      <div className="nav-container">
        <router-link
        v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          :class="['nav-icon', { 'active': $route.path === item.path }]"
          :title="item.label"
          class="navbar-item">
            <i :class="item.icon"></i>
        </router-link>
        <button @click="toggleAuthModal" class="navbar-item" :class="['nav-icon', 'auth-button']" :title="authStore.user ? 'Cerrar Sesión' : 'Iniciar Sesión'">
          <i :class="authStore.user ? 'fa-solid fa-right-to-bracket fa-xl py-3' : 'fa-solid fa-key fa-xl py-3' "></i>
        </button>
      </div>
    </nav>

    <div :class="['modal', {'is-active' : showAuthModal}]">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ authStore.user ? 'Cerrar Sesión' : 'Iniciar Sesión' }}
          </p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <div v-if="!authStore.user">
            <div class="tabs is-centered">
              <ul>
                <li :class="{ 'is-active' : authTab === 'login'}">
                  <a @click="authTab = 'login'">Iniciar Sesión</a>
                </li>
                <li :class="{ 'is-active' : authTab === 'register'}">
                  <a @click="authTab = 'register'">Registrarse</a>
                </li>
              </ul>
            </div>

            <form @submit.prevent="handleAuth">
              <div class="field" v-if="authTab === 'register'">
                <label for="nombre" class="label">Nombre de usuario</label>
                <div class="control">
                  <input v-model="displayName" type="text" class="input" placeholder="Tu nombre" required>
                </div>
              </div>
              <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control">
                  <input v-model="email" type="email" class="input" placeholder="Tu email" required>
                </div>
              </div>
              <div class="field">
                <label for="password" class="label">Contraseña</label>
                <div class="control">
                  <input v-model="password" type="password" class="input" placeholder="Tu contraseña" required>
                </div>
              </div>

              <div v-if="authError" class="notification is-danger is-light">{{ authError }}</div>

              <div class="field">
                <div class="control">
                  <button class="button is-primary is-fullwidth" :class="{'is-loading':authLoading}" type="submit">{{ authTab === 'login' ? 'Iniciar Sesión' : 'Registrarse' }}</button>
                </div>
              </div>
            </form>
          </div>

          <div v-else class="has-text-centered">
            <div class="content">
              <p>Nos vemos <strong>{{ authStore.userData.displayName || authStore.userData.email }}</strong>!</p>
            </div>
            <button class="button is-danger" @click="handleLogout" :class="{'is-loading':authLoading}">Cerrar Sesión</button>
          </div>
        </section>
      </div>
    </div>
      <WelcomeBanner v-if="authStore.user && authStore.userData" />

</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import WelcomeBanner from '@/components/Welcome.vue'

const route = useRoute();
const authStore = useAuthStore()

const showAuthModal = ref(false)
const authTab = ref('login')
const displayName = ref('')
const editDisplayName = ref('')
const email = ref('')
const password = ref('')
const authError = ref('')
const authLoading = ref(false)
const updateLoading = ref(false)

const getUserName = computed(() => {
  return authStore.userData?.displayName || authStore.user?.email || 'Usuario'
})

const menuItems = [
    { 
      path: '/', 
      label: 'Inicio',
      icon: 'fa-solid fa-house fa-xl py-3'
    },
    { 
      path: '/sobre-mi', 
      label: 'Sobre Mí',
      icon: 'fa-regular fa-user fa-xl py-3'
    },
    { 
      path: '/experiencia', 
      label: 'Experiencia',
      icon: 'fa-solid fa-briefcase fa-xl py-3'      
    },
    { 
      path: '/proyectos', 
      label: 'Proyectos',
      icon: 'fa-regular fa-folder-open fa-xl py-3'
    },
    { 
      path: '/contacto', 
      label: 'Contacto',
      icon: 'fa-regular fa-envelope fa-xl py-3'
    }
  ];

  const toggleAuthModal = () => {
    if (authStore.user) {
      editDisplayName.value = authStore.userData?.displayName || ''
      showAuthModal.value = true
    } else {
    showAuthModal.value = true
    }
  }

  const closeModal = () => {
    showAuthModal.value = false;
    authError.value = '';
    email.value = '';
    password.value = '';
    displayName.value ='';
    editDisplayName.value = ''

  }

  const handleAuth = async () => {
    authLoading.value = true;
    authError.value = ''

    try {
      let result
      if (authTab.value === 'login') {
        result = await authStore.login(email.value, password.value)
      } else {
        result = await authStore.register(email.value, password.value, displayName.value)
      }

      if(result.success) {
        closeModal()
      } else {
        authError.value = result.error
      }
    } catch(error) {
      authError.value = 'Error inesperado'
    } finally {
      authLoading.value = false
    }
  }
  const updateDisplayName = async () => {
  if (!editDisplayName.value.trim()) return
  
  updateLoading.value = true
  const result = await authStore.updateUserProfile(editDisplayName.value)
  
  if (!result.success) {
    authError.value = result.error
  }
  
  updateLoading.value = false
  }
  const handleLogout = async () => {
    authLoading.value = true;
    await authStore.logout()
    authLoading.value =false
    closeModal()
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
  color:var(--icon-active-text);
  transform: translateY(-2px);
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
    top:1rem;
  }

  .nav-container {
    padding: 0.75rem 1rem;
  }

  .nav-icon {
    padding: 0.4rem;
  }

  .nav-icon i {
    width: 20px;
    height: 20px;
  }
}
@media screen and (max-width: 400px) {
  .floating-nav {
    bottom: 1rem;
  }

  .nav-container {
    padding: 0.75rem 1rem;
  }

  .nav-icon {
    padding: 0.4rem;
  }

  .nav-icon i {
    width: 20px;
    height: 20px;
  }
}

.auth-button {
  border: none;
  background: none;
  cursor: pointer;
}

.modal {
  z-index: 1001;
}
</style>