<template>
    <div class="content">
      <div class="title-content">Sobre Mí</div>
      <i class="title-content-icon fa-regular fa-address-card mr-2"></i>
      <div class="title-content-mobile">
        <i class="title-icon fa-regular fa-address-card mr-2"></i>
        <p>Sobre Mí</p>
        </div>

      <div class="text-content">
        <div class="is-size-4 has-text-info-30 has-text-weight-semibold">
         <i class="fa-solid fa-code mr-2"></i> Desarrolladora Front-End | Data Science | Nutricionista 
        </div>
        <div class="">
          Mi camino hacia el desarrollo web no fue lineal, pero sí lleno de propósito.
          Mi camino al desarrollo web no fue el más común, pero sí el más auténtico.  

          <br />Mi misión es simple: <b class="has-text-info-50">aplicar la precisión del análisis y la empatía del servicio al diseño de interfaces digitales funcionales</b> .
          <br />
          Como Nutricionista, dediqué años a la consulta médica, donde cultivé habilidades esenciales para el desarrollo:
          Como nutricionista, pasé años escuchando, diagnosticando y diseñando soluciones personalizadas para personas reales. Hoy, aplico esa misma **empatía, lógica y atención al detalle** al construir experiencias digitales.

          <ol class='has-text-justified'>
            <li><b>Resolución de Problemas Complejos:</b> Diagnosticar la raíz de un problema.</li>
            <li><b>Empatía con el Usuario: </b>Entender las necesidades del paciente/usuario final para crear soluciones intuitivas (UX).</li>
            <li><b>Comunicación Estructurada: </b>Explicar ideas complejas de forma clara y ordenada.</li>
          </ol>

          <div class="has-text-info-35 is-size-4 has-text-weight-semibold" > 
            <i class="fa-solid fa-rocket mr-2"></i>Mi Transformación: De Data Science a React</div>
          Mi fascinación por la lógica y la estructuración de datos me llevó a una constante evolución profesional.
          <ul class='has-text-justified'>
            <li>Inicié mi reinvención con Data Science, aprendiendo a extraer valor con <b class="has-text-info-50">Python y SQL</b>.</li>
            <li>Actualmente, mi pasión se centra en el <b class="has-text-info-50">Desarrollo Front-End</b>, donde puedo unir mi lado analítico con la creación visible y tangible.</li>
          </ul>

          <div class="has-text-info-35 is-size-3 has-text-weight-semibold" > <i class="fa-solid fa-screwdriver-wrench mr-1"></i> Mi Stack Tecnológico </div>
          Mi doble bootcamp me ha equipado con un stack versátil que garantiza código moderno y escalable:
          
          <Skills/>
          <hr class='has-background-info' />
        </div>
      </div>
      <div class="mt-6">
        <Hero/>
      </div>
    </div>
</template>
<script setup>
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'

</script>
<style scoped></style>