<template>
    <div class="content">
      <p class="title-content">Contacto</p>
        <i class=" title-content-icon fa-regular fa-envelope-open mr-2"></i>
      <div class="title-content-mobile">
        <i class=" title-icon fa-regular fa-envelope-open mr-2"></i>
        <p>Contacto</p>
        </div>
        <div class="text-content">
          <p class="is-size-6 has-text-grey">¡Conectemos! Puedes encontrarme en... </p>

      <div class="contacto-links buttons py-1 is-justify-content-right">
        <a class="" href="https://www.linkedin.com/in/carolinahernandezbarra/" target="_blank" rel="noopener noreferrer" title="Linkedin"><i class="fa-brands fa-linkedin fa-2xl mr-4"></i></a>
        <a href="https://github.com/CaroHernz" target="_blank" class="" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2xl mr-4"></i></a>
        <a href="mailto:carolina.fhb@gmail.com" target="_blank" class="" rel="noopener noreferrer"><i class="fa-solid fa-envelope fa-2xl mr-4"></i></a>
        <a href="https://wa.me/56978903516" target="_blank" class="" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp fa-2xl mr-4"></i></a>
      </div>

      <p class="is-size-6 has-text-grey">ó Envíame un mensaje! Estoy abierta a oportunidades de Desarrolladora Front-end.</p>

      <div class="formulario">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Nombre</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input is-info" type="text" placeholder="Nombre" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Correo</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input is-info" type="email" placeholder="tu_correo@mail.com" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Tu mensaje</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea is-info" placeholder="Escribe tu mensaje..."></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered pt-5">
          <p class="control">
            <button class="button is-info has-text-white ">
              Submit
            </button>
          </p>
          <p class="control">
            <a class="button is-info is-outlined">
              Cancel
            </a>
          </p>
        </div>
      </div>
        </div>

      <div class="mt-6">
        <Hero/>
      </div>
    </div>
</template>
<script setup>
import Hero from '../components/Hero.vue'
</script>
<style scoped></style>