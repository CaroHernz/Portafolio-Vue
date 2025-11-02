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
                  <div class="experiencia-title has-text-weight-bold has-text-info-45 is-size-3 is-size-4-mobile">{{experiencia.title}}</div>
                  <div class="experiencia-subtitle has-text-weight-semibold is-size-5 has-text-info-25">{{experiencia.subtitle}}</div>                  
                  <ul class="experiencia-description has-text-grey is-size-6">
                    <li v-for="(item,index) in experiencia.description" :key="index" class="mb-1">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="experiencia-line column-1">
                  <div class="experiencia-dot"></div>
                </div>
              </div>
          </div>
        </section>
    <div class="mt-3 has-text-centered">
      <a class="button is-rounded is-grey has-text-info-40" href="/estudios" target=""><i class="fa-solid fa-arrow-left fa-lg pr-1"></i>Ver Mis Estudios</a>
      <a class="button is-rounded is-grey has-text-info-40 ml-3" href="/proyectos" target="">Ver Mis Proyectos <i class="fa-solid fa-arrow-right fa-lg pl-1"></i></a>
    </div>
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
      subtitle: 'Freelance | 2025 ~',
      description: ['Desarrollo de aplicaciones web usando React y Vue.js.','Colaboración directa con clientes para entender requisitos y entregar soluciones centradas en el usuario.', 'Implementación de buenas prácticas de accesibilidad y rendimiento', 'Optimización de performance y SEO en proyectos web.']
    },
    {
      id: 2,
      title: 'Docente Instituto Profesional',
      subtitle: 'IPChile sede Rancagua | 2020 ~ 2022',
      description: ['Diseño y planificación de clases sobre temas especializados.',
      'Elaboración de material educativo.','Acompañamiento estudiantil, fomento de pensamiento crítico y resolución de casos clínicos.','Uso de plataformas digitales (Google, Moodle) para la gestión de contenidos y retroalimentación.']
    },
    {
      id: 3,
      title: 'Nutricionista',
      subtitle: 'Consulta Nutricional | 2017 ~ 2025',
      description: ['Gestión autónoma de cartera de clientes, demostrando proactividad y organización.','Comunicación clara y efectiva para explicar conceptos complejos de manera sencilla.','Resolución de problemas personalizados para alcanzar los objetivos de cada paciente.','Atención al detalle en el seguimiento y análisis de progresos.','Análisis de datos de pacientes para entregar un tratamiento asertivo y personalizado.']
    }
]
</script>
<style scoped>
.experiencia-line {
  background-color: var(--icon-active);
  width: 3px; 
}
.experiencia-subtitle, .experiencia-description {
  text-align: left;
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