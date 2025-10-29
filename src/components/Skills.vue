<template>
  <div v-if="displayType === 'icon-only'" class="skill-carousel-container">
    <div class="skill-carousel-track">
      <div 
        v-for="(skill, index) in duplicatedSkills" 
        :key="index" 
        class="skill-icon-carousel" 
        :data-tooltip="skill.name" 
        :style="{ color: skill.color }"
      >
        <i :class="skill.icon"></i>
      </div>
    </div>
  </div>

  <div v-else class="container">
    <div v-for="[category, skillsList] in Object.entries(skills)" :key="category" class="mb-5">
      <div class="is-size-6 is-italic has-text-weight-semibold has-text-grey mb-3">{{ category }}</div>
      <div class="field is-grouped is-grouped-multiline is-justify-content-end">
        <div v-for="(skill, index) in skillsList" :key="index" class="control">
          <div class="tags has-addons">
            <span class="tag is-rounded is-light is-medium p-4" :style="{ border: `1px solid ${skill.color}` }">
              <span class="icon fa-lg mr-1" :style="{ color: skill.color }">
                <i :class="skill.icon"></i>
              </span>
              <span class="has-text-grey">{{ skill.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  displayType: {
    type: String,
    default: 'default'
  }
})

// Datos de habilidades
const skills = {
  "Front-End Core y Lenguajes": [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
    { name: 'SASS', icon: 'fa-brands fa-sass', color: '#CC6699' }
  ],
  "Frameworks & Librerías UI": [
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#4FC08D' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' },
    { name: 'Bulma', icon: 'fa-solid fa-b', color: '#00d1b2' },
    { name: 'TailwindCSS', icon: 'fa-solid fa-wind', color: 'rgb(0,167,187)' }
  ],
  "Back-End & Bases de Datos": [
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3274c0ff' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
    { name: 'SQL', icon: 'fa-solid fa-database', color: 'rgb(0,113,138)' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#47A248' }
  ],
  "Herramientas & DevOps/Cloud": [
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#000000' },
    { name: 'AWS', icon: 'fa-brands fa-aws', color: '#ff9900' },
    { name: 'Firebase', icon: 'fa-solid fa-fire', color: 'rgb(222,44,3)' },
  ],
  "Diseño & CMS": [
    { name: 'UI/UX', icon: 'fa-solid fa-icons', color: '#FF26BE' },
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#ff7926ff' },
    { name: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#21759B' },
  ]
}

// Computed property para habilidades duplicadas (carousel)
const duplicatedSkills = computed(() => {
  const allSkills = Object.values(skills).flat()
  return [...allSkills, ...allSkills]
})
</script>

<style scoped>
.skill-carousel-container {
  max-width: 624px;
  overflow: hidden;
  position: relative;
  min-height: 90px;
}
.skill-carousel-track {
  display: flex;
  animation: scroll-infinite 30s linear infinite;
  gap:1rem;
  padding: 1rem 3rem;
}
.skill-icon-carousel {
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  align-items: center;
  justify-content: center;
  min-width: 5px;
  margin: 0 10px;
  font-size: 2rem;

}
.skill-carousel-container:hover .skill-carousel-track {
  animation-play-state: paused;
}
.skill-icon-carousel:hover {
  transform: scale(1.2) translateY(-5px);
}
@keyframes scroll-infinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 1rem)); /* Ajuste para el gap */
  }
  
}
.skill-icon-carousel {
  position: relative;
  cursor: pointer;
}

.skill-icon-carousel::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(96, 96, 96, 0.8);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}
.skill-icon-carousel:hover::after {
  opacity: 1;
  visibility: visible;
  bottom: -35px;
}
@media screen and (max-width: 768px) {
  .skill-carousel-container {
  width: 100%;
  max-width: 760px;
}
}
</style>