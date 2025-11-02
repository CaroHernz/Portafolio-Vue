<template>
    <div class="content">
      <p class="title-content">Estudios</p>
              <i class="title-content-icon fa-solid fa-graduation-cap mr-2"></i>

      <div class="title-content-mobile">
        <i class="title-icon fa-solid fa-graduation-cap mr-2"></i>
        <p>Estudios</p>
      </div>
      <div class="text-content">
      <section class="my-5">
          <div class="">
              <div v-for="estudio in estudios" :key="estudios.id" class="columns is-tablet">
                <div class="estudios-content column">                  
                  <div class="estudios-title has-text-weight-bold has-text-info-45 is-size-3 is-size-4-mobile">{{estudio.title}}</div>
                  <div class="estudios-subtitle has-text-weight-semibold is-size-5 has-text-info-25">{{estudio.subtitle}}</div>                  
                  <ul class="estudios-description has-text-grey is-size-6">
                    <li v-for="(item,index) in estudio.description" :key="index" class="mb-1">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="estudios-line column-1">
                  <div class="estudios-dot"></div>
                </div>
              </div>
          </div>
        </section>
      </div>
      <div class="mt-3 has-text-centered">
      <a class="button is-rounded is-grey has-text-info-40" href="/sobre-mi" target=""><i class="fa-solid fa-arrow-left fa-lg pr-1"></i>Volver a Sobre Mí</a>
      <a class="button is-rounded is-grey has-text-info-40 ml-3" href="/experiencia" target="">Ver Mi Experiencia</a>
      <a class="button is-rounded is-grey has-text-info-40 ml-3" href="/proyectos" target="">Ver Mis Proyectos <i class="fa-solid fa-arrow-right fa-lg pl-1"></i></a>
    </div>
      <div class="mt-6">
        <Hero/>
      </div>
    </div>
</template>
<script setup>
import Hero from '../components/Hero.vue'

const estudios = [
    {
      id: 1,
      title: 'Desarrollado de Aplicaciones Front End',
      subtitle: 'Universidad Andrés Bello (UNAB) | 2025',
      description: ['Especialización en creación de interfaces modernas con Vue.js, JavaScript, HTML5, CSS3 y herramientas del ecosistema front-end. Desarrollo de aplicaciones reactivas, enfoque en UX y buenas prácticas de código.']
    },
    {
      id: 2,
      title: 'Data Science (Bootcamp)',
      subtitle: 'Henry | 2022',
      description: ['Fundamentos en Python, SQL/NoSQL, análisis de datos, estadística y machine learning. Proyectos basados en resolución de problemas reales con datos.']
    },
    {
      id: 3,
      title: 'Nutricionista',
      subtitle: 'Universidad de Chile | 2016',
      description: ['Formación científica en salud, con énfasis en evaluación clínica, comunicación terapéutica y diseño de planes personalizados.']
    }
]
</script>
<style scoped>
.estudios-line {
  background-color: var(--icon-active);
  width: 3px; 
}
.estudios-subtitle, .estudios-description {
  text-align: left;
}
.estudios-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--text-accent);
  position: relative;
  left: -5px;
  top:36px;
}
@media screen and (max-width: 768px) {
  .estudios-line {
    width: 100%;
    height: 3px;
    margin-top: 1rem;
  }
  .estudios-dot {
    visibility: hidden;
  }
}
</style>