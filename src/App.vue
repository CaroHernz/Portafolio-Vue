<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './style.css'

const route = useRoute()
const router = useRouter()

const navHistory = ref([])
const transitionName = ref('slide-left')

// Definir el orden de las rutas para la animación
const routesOrder = ['/', '/sobre-mi', '/experiencia', '/proyectos', '/contacto']

// Inicializar el historial
onMounted(() => {
  navHistory.value = [route.path]
})

// Observar cambios en la ruta
watch(() => route.path, (newPath, oldPath) => {
  // Agregar al historial si es una ruta nueva
  if (navHistory.value[navHistory.value.length - 1] !== newPath) {
    navHistory.value.push(newPath)
  }
  
  // Determinar la dirección de la animación
  const oldIndex = routesOrder.indexOf(oldPath)
  const newIndex = routesOrder.indexOf(newPath)
  
  console.log(`De ${oldPath} a ${newPath}`, `Dirección: ${newIndex > oldIndex ? 'slide-left' : 'slide-right'}`)
  
  if (newIndex > oldIndex) {
    transitionName.value = 'slide-left'
  } else {
    transitionName.value = 'slide-right'
  }
})
</script>

<template>
  <div class="app-container has-background-white-ter">
    <Navbar />
    
    <main class="page-content">
      <router-view v-slot="{ Component, route }">
        <transition :name="transitionName" mode="out-in">
          <component 
            :is="Component" 
            :key="route.path"
          />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
/* Transiciones CSS */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
