<template>
    <div class="content">
      <p class="title-content">Proyectos</p>
      <i class="title-content-icon fa-regular fa-folder mr-2"></i>
      <div class="title-content-mobile">
        <i class="title-icon fa-regular fa-folder-open mr-2"></i>
        <p>Proyectos</p>
      </div>

      <section class="text-content">
        <div class="">
            <div v-for="project in projects" :key="project.id" class="columns is-tablet">
              <div class="project-img-container column-2 is-align-content-center">
                <img :src="project.image" :alt="project.title" class="project-img" />
              </div>

              <div class="project-content column">
                
                <div class="project-title has-text-weight-bold has-text-info-45 is-size-4">{{project.title}}</div>
                <div class="project-tags tags is-justify-content-end my-2">
                  <span v-for="(tech,index) in project.technologies" :key="index" class="tag is-rounded is-info">{{ tech }}</span>
                </div>
                <div class="project-description has-text-grey">{{project.description}}</div>

                <div class="project-links my-3 has-text-centered">
                  <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="button is-rounded has-text-info-45 mr-3">
                    <i class="fa-brands fa-github fa-lg mr-2"></i> Code
                  </a>
                  <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="button is-rounded has-text-info-45 ">
                    <i class="fa-solid fa-play fa-lg mr-2"></i> Preview
                  </a>
                </div>
              </div>

              <div class="project-line column-1 is-align-content-top">
                <div class="project-dot"></div>
              </div>
            </div>
        </div>
      </section>

      <div class="mt-6">
        <Hero/>
      </div>

      <div class="text-content is-hidden">Mis proyectos destacados.
        Título: "DataViz Dashboard Pro".
        <br />
        Rol/Función: Desarrolladora Front-end principal.
        <br />
        Desafío y Solución: Situación, Tarea, Acción, Resultado.
        <br />
        <ul>EJEMPLO:
          <li> "Necesidad de una interfaz de e-commerce (Situación).</li>
          <li> Construí la aplicación usando React, Hooks y Sass (Acción)</li>
          <li> para lograr una interfaz 100% responsiva (Resultado)</li>
          <li> y reducir el tiempo de carga un 15%."</li>
        </ul>

        <br />
        Tecnologías Clave: Enumera los frameworks y herramientas usadas (React, Vercel, Firebase, Bootstrap, etc.).
        <br />
        Enlaces Clave: Enlaces a Demo en Vivo y Repositorio de GitHub (ambos obligatorios).
    </div>
    </div>
</template>
<script setup>
import Hero from '../components/Hero.vue'
const projects = [
    {
      id: 1,
      title: 'Libro de Recetas Digital',
      description: 'Aplicación web de recetas culinarias categorizadas por tiempos de comida (desayuno, almuerzo, cena).',
      image: 'project1.png',
      technologies: ['Vue', 'CSS3', 'JavaScript', 'Bootstrap', 'Router'],
      githubUrl: 'https://github.com/CaroHernz/Libro-de-Recetas',
      liveUrl: 'https://libro-de-recetas.vercel.app/'
    },
    {
      id: 2,
      title: 'Pokédex',
      description: 'Buscador de Pokémon conectado con la PokeAPI que muestra estadísticas, tipos, evoluciones y características detalladas de cada Pokémon.',
      image: 'project2.png',
      technologies: ['Vue.js', 'PokeAPI', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/CaroHernz/pokedex_vue',
      liveUrl: 'https://pokedex-vue-neon.vercel.app/'
    },
    {
      id: 3,
      title: 'Portafolio Personal',
      description: 'Sitio web profesional para mostrar proyectos y habilidades',
      image: 'project3.png',
      technologies: ['React', 'JavaScript', 'Bootstrap', 'Framer Motion'],
      githubUrl: 'https://github.com/CaroHernz',
      liveUrl: 'https://portafolio-frontend-flax.vercel.app/'
    },
    {
      id: 4,
      title: 'Calculadora para Nutricionistas',
      description: 'Aplicación diseñada para calcular requerimientos nutricionales de manera rápida y personalizada. Ayuda en el cálculo de distribución de nutrientes y grupos de alimentos, entregando una Pauta de Alimentación en formato PDF',
      image: 'project4.png',
      technologies: ['HTML', 'CSS3', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/CaroHernz',
      liveUrl: 'https://calculadora-nutricion.vercel.app/'
    },
    {
      id: 5,
      title: 'Tecno Chile',
      description: 'Proyecto E-commerce de productos de tecnología y electrónica. Solución con diseño responsivo, card de productos, búsqueda y filtros en catálogo, carrito de compras, entre otras funcionalidades.',
      image: 'project5.png',
      technologies: ['HTML', 'CSS3', 'JavaScript', 'Sass'],
      githubUrl: 'https://github.com/CaroHernz/M4_EvaluacionFinal/tree/develop',
      liveUrl: 'https://carohernz.github.io/M5-ABPRO/'
    }
  ]
</script>
<style scoped>
/* Proyectos */
.project-img {
  width: 260px;
  border: 5px solid transparent;
  box-shadow: var(--shadow);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}
.project-img:hover {
  transform: scale(1.1);
}
.project-line {
  background-color: var(--grey-line);
  width: 3px; 
}
.project-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--off-white);
  position: relative;
  left: -5px;
  top: 27px;
  border: 3px solid var(--grey-line);
}
.project-tags {
  opacity: 0.55;
}

@media screen and (max-width: 768px) {
  .project-content {
    text-align: start;
  }
  .project-img-container {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
  .project-img {
    width: 350px;
  }
  .project-line {
    width: 100%;
    height: 3px;
    margin-bottom: 3rem;
  }
  .project-dot {
    left:50%;
    top:-5px
  }
}
</style>