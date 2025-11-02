<template>
  <div class="content">
    <div class="title-content">Sobre Mí</div>
    <i class="title-content-icon fa-regular fa-address-card mr-2"></i>
    <div class="title-content-mobile">
      <i class="title-icon fa-regular fa-address-card mr-2"></i>
      <p>Sobre Mí</p>
    </div>

    <div class="text-content">
      <div class="is-size-4 is-size-5-mobile title-section has-text-weight-semibold">
        <i class="fa-solid fa-code mr-2"></i> Desarrolladora Front-End | Nutricionista | Apasionada por los datos y las personas
      </div>
      <div class="">
         <b class="text-bold">¡Hola! Soy Carolina</b>, una desarrolladora front-end con raíces en la nutrición y el análisis de datos.
        Mi camino al desarrollo web nació de una combinación poco común: <i>la lógica del análisis de datos</i> y <i>la empatía del cuidado humano</i>.
        <br> Durante años trabajé como nutricionista en consulta clínica, donde aprendí a escuchar, diagnosticas necesidades reales y diseñar soluciones personalizadas. Hoy, transformo esa misma mentalidad en código: <b class="text-bold">creo interfaces web funcionales, accesibles y centradas en el usuario</b>.
        <br> No vengo del típico perfil técnico y considero que eso es mi ventaja, porque entiendo que delante de una interfaz web hay una persona con objetivos, necesidades y expectativas.
        
        <div class="text-bold is-size-4 is-size-5-mobile has-text-weight-semibold mt-3"> 
          <i class="fa-solid fa-user-plus mr-1"></i> Lo que aporto al equipo 
        </div>

        <div class="skills-cards columns is-multiline is-centered">
          <div class="column is-12-mobile is-4-tablet is-4-desktop">
            <div class="box has-text-centered">
              <i class="fas fa-lightbulb fa-2xl has-text-warning mb-5 pb-2"></i>
              <h4 class="card-title is-6 has-text-weight-bold">Resolución de Problemas con Enfoque Humano</h4>
              <p class="card-text is-size-7">No solo busco <i>qué</i> falla, sino el <i>por qué</i> del problema.
                <br>Mi experiencia en diagnóstico clínico me enseñó a ir más allá de los síntomas: aplico esa misma curiosidad para depurar bugs, optimizar flujos y mejorar la experiencia del usuario.</p>
            </div>
          </div>

          <div class="column is-12-mobile is-4-tablet is-4-desktop">
            <div class="box has-text-centered">
              <i class="fas fa-heart fa-2xl has-text-danger mb-5 pb-2"></i>
              <h4 class="card-title is-6 has-text-weight-bold">Empatía como Motor de Diseño</h4>
              <p class="card-text is-size-7">Diseño pensando en quién usará la interfaz, no solo en cómo se ve. 
                <br>Mi formación en salud me entrenó para poner al otro en el centro. Hoy, eso se traduce en decisiones de UX/UI que priorizan accesibilidad, usabilidad y emociones reales.</p>
            </div>
          </div>

          <div class="column is-12-mobile is-4-tablet is-4-desktop">
            <div class="box has-text-centered">
              <i class="fas fa-comments fa-2xl has-text-primary mb-5 pb-2"></i>
              <h4 class="card-title is-6 has-text-weight-bold">Comunicación Clara y Colaborativa</h4>
              <p class="card-text is-size-7">Traduzco ideas técnicas en lenguaje comprensible.
                <br>Ya sea explicando un componente de Vue a un diseñador o alineando expectativas con un cliente, priorizo la claridad, la escucha activa y la retroalimentación constructiva.</p>
            </div>
          </div>
        </div>

        <div class="title-section is-size-3 is-size-4-mobile has-text-weight-semibold"> <i
            class="fa-solid fa-screwdriver-wrench mr-1"></i> Mi Stack Tecnológico </div>
        <Skills />
      </div>
    </div>
    <div class="mt-3 has-text-centered">
      <a class="button is-rounded is-grey has-text-info-40" href="/estudios" target="">Ver Mis Estudios <i class="fa-solid"></i></a>
      <a class="button is-rounded is-grey has-text-info-40 ml-3" href="/experiencia" target="">Ver Mi Experiencia <i class="fa-solid fa-arrow-right fa-lg pl-1"></i></a>
    </div>
    <div class="mt-6">
      <Hero />
    </div>
  </div>

</template>
<script setup>
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'

</script>
<style scoped>
.skills-cards {
  margin: 1rem 0;
}
.box {
  height: 100%;
}

.card-title {
  color: var(--icon-active-text);
  line-height: 1.3;
}
.card-text {
  line-height: 1.5;
}
@media screen and (max-width: 480px) {

  .card-title.is-5 {
    font-size: 1rem;
  }

  .content.is-small {
    font-size: 0.875rem;
  }
}
</style>