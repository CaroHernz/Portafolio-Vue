<template>
  <div :class="['modal', {'is-active' : modelValue}]">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ authStore.user ? 'Cerrar Sesión' : 'Bienvenido' }}
        </p>
        <button class="" aria-label="close" @click="closeModal">
          <i class="fa-solid fa-xmark fa-xl"></i>
        </button>
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
                <input v-model="displayName" type="text" class="input is-info" placeholder="Tu nombre" required>
              </div>
            </div>
            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control">
                <input v-model="email" type="email" class="input is-info" placeholder="Tu email" required>
              </div>
            </div>
            <div class="field">
              <label for="password" class="label">Contraseña</label>
              <div class="control">
                <input v-model="password" type="password" class="input is-info" placeholder="Tu contraseña" required>
              </div>
            </div>

            <div v-if="authError" class="notification is-danger is-light">{{ authError }}</div>

            <div class="field">
              <div class="control has-text-centered">
                <button class="button is-info" :class="{'is-loading':authLoading}" type="submit">
                  {{ authTab === 'login' ? 'Ingresar' : 'Registrarse' }}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div v-else class="has-text-centered">
          <div class="pb-5">
            <p>Nos vemos <strong>{{ authStore.userData.displayName || authStore.userData.email }}</strong>!</p>
          </div>
          <button class="button is-danger" @click="handleLogout" :class="{'is-loading':authLoading}">
            ¡Adiós!
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'close'])

// Store
const authStore = useAuthStore()

// Estado local del modal
const authTab = ref('login')
const displayName = ref('')
const email = ref('')
const password = ref('')
const authError = ref('')
const authLoading = ref(false)

// Métodos
const closeModal = () => {
  emit('update:modelValue', false)
  emit('close')
  resetForm()
}

const resetForm = () => {
  authError.value = ''
  email.value = ''
  password.value = ''
  displayName.value = ''
  authTab.value = 'login'
}

const handleAuth = async () => {
  authLoading.value = true
  authError.value = ''

  try {
    let result
    if (authTab.value === 'login') {
      result = await authStore.login(email.value, password.value)
    } else {
      result = await authStore.register(email.value, password.value, displayName.value)
    }

    if (result.success) {
      closeModal()
    } else {
      authError.value = result.error
    }
  } catch (error) {
    authError.value = 'Error inesperado'
  } finally {
    authLoading.value = false
  }
}

const handleLogout = async () => {
  authLoading.value = true
  await authStore.logout()
  authLoading.value = false
  closeModal()
}

// Resetear formulario cuando se abre el modal
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    resetForm()
  }
})
</script>

<style scoped>
.modal {
  z-index: 1001;
}
.modal-card {
  max-width: 450px;
}
.modal-card-head {
  background: linear-gradient(135deg, var(--icon-active), var(--text-accent));
  color: var(--text-color);
  font-weight: 500;
  padding: 1rem 2rem;
}
.modal-card-body {
  padding: 1.5rem 2rem 2rem 2rem;
}
.modal-background {
  background-color: rgba(0,107,152, 0.1);
}

@media screen and (max-width:450px) {
  .modal-card {
  max-width: 90%;
}
}
</style>