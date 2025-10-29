<template>
  <div class="top-welcome-banner " v-if="authStore.user && authStore.userData">
    <div class="container">
      <div class="banner-content">
        <span class="banner-text">
          <span class="icon has-text-warning-80">
            <i class="fa-regular fa-smile-wink"></i>
          </span>
          ¡Hola <strong class="welcome-name">{{ getUserName }}</strong>! 
          Bienvenid@ a mi rincón digital.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const authLoading = ref(false)

const getUserName = computed(() => {
  return authStore.userData?.displayName || authStore.user?.email || 'Usuario'
})

const handleLogout = async () => {
  authLoading.value = true
  await authStore.logout()
  authLoading.value = false
}
</script>

<style scoped>
.top-welcome-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(135deg, #9a48c7, var(--text-accent));
  color: white;
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.welcome-name {
  color: rgb(255,221,147)
}
.banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.banner-text {
  font-weight: 500;
}
/* Responsive */
@media screen and (max-width: 768px) {
  .banner-content {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  .banner-text {
    font-size: 0.9rem;
  }
}
</style>