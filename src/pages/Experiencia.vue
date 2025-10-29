<template>
    <div class="content">
      <p class="title-content">Experiencia</p>
              <i class="title-content-icon fa-solid fa-briefcase mr-2"></i>

      <div class="title-content-mobile">
        <i class="title-icon fa-solid fa-briefcase mr-2"></i>
        <p>Experiencia</p>
      </div>
      <div class="text-content">
      <section class="my-5">
          <div class="">
              <div v-for="experiencia in experiencias" :key="experiencias.id" class="columns is-tablet">
                <div class="experiencia-content column">                  
                  <div class="experiencia-title has-text-weight-bold has-text-info-45 is-size-3">{{experiencia.title}}</div>
                  <div class="experiencia-subtitle has-text-weight-semibold is-size-5 has-text-info-25">{{experiencia.subtitle}}</div>                  
                  <div class="experiencia-description has-text-grey is-size-6">{{experiencia.description}}</div>
                </div>
                <div class="experiencia-line column-1">
                  <div class="experiencia-dot"></div>
                </div>
              </div>
          </div>
        </section>
      </div>
      <div class="mt-6">
        <Hero/>
      </div>
    </div>
</template>
<script setup>
import Hero from '../components/Hero.vue'

const experiencias = [
    {
      id: 1,
      title: 'Desarrollador Front-End',
      subtitle: 'Freelance',
      description: 'Desarrollo de aplicaciones web usando React.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Bootstrap', 'Router'],
      projectUrl: 'https://libro-de-recetas.vercel.app/'
    },
    {
      id: 2,
      title: 'Nutricionista',
      subtitle: 'Consulta Nutricional - Centro Médico Nueva Salud',
      description: 'Gestión autónoma de cartera de clientes, demostrando proactividad y organización,Comunicación clara y efectiva para explicar conceptos complejos de manera sencilla, Resolución de problemas personalizados para alcanzar los objetivos de cada paciente. Atención al detalle en el seguimiento y análisis de progresos'    
    }
]
</script>
<style scoped>
.experiencia-line {
  background-color: var(--icon-active);
  width: 3px; 
}
.experiencia-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--text-accent);
  position: relative;
  left: -5px;
  top:36px;
}
@media screen and (max-width: 768px) {
  .experiencia-line {
    width: 100%;
    height: 3px;
    margin-top: 1rem;
  }
  .experiencia-dot {
    visibility: hidden;
  }
}
</style>