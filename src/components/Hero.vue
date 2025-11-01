<template>
  <div class="hero">
    <section v-if="variant === 'main'" class="hero-section-main">
      <div class="columns is-variable is-2-mobile hero-section mx-0">
        <div class="hero-content column is-8-tablet is-12-mobile pr-3">
            <div class=" has-text-weight-bold has-text-grey hero-title">
              Hola! <span class='has-text-info-50'>Soy Carolina</span>
            </div>
            <div class="has-text-weight-semibold has-text-info-30 hero-subtitle">
              Desarrolladora Front-end
            </div>
            <small class='hero-text has-text-grey-dark'>Me apasiona crear interfaces web <strong class="has-text-info-30">funcionales, accesibles y centradas en las personas</strong> —porque detrás de cada pantalla hay un usuario con necesidades reales.
              <br>
              <router-link class="button has-background-info-60 py-0 mt-2 has-text-info-100 is-rounded has-text-weight-semibold" to="/proyectos">
                Ver Proyectos <i class="fa-solid fa-arrow-right-long pl-2"></i>
              </router-link>
            </small>
          </div>
          <div class="column is-12-mobile is-4-tablet hero-content-img">
            <img src="/img-perfil3.png" alt="Foto de Perfil" class='hero-img' />
          </div>
      </div>
    </section>
    <section v-else class="hero-mini-container">
      <div class="hero-content-mini">
        <div class="columns">
            <div class="column">
              <p class="is-size-3 has-text-grey">Hola! <span class="has-text-info-50">Soy Carolina</span></p>
              <p class="is-size-5 has-text-info-30">Desarrolladora Front-end</p>
              <div class="is-size-7 has-text-grey">Nutricionista resolutiva con base en Data Science. Me gusta construir interfaces web limpias, funcionales y centradas en el usuario.</div>
            </div>
            <div class="column-1">
              <img src="/img-perfil3.png" alt="Hola Soy Carolina" class='hero-img-mini'/>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>
<script setup>
defineProps({
  variant: {
    type: String,
    default: 'mini',
    validator: (value) => ['main', 'mini'].includes(value)
  }
})
</script>
<style scoped>
.hero-section-main {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
}
.hero-content {
  line-height: 1.1;
}
.hero-mini-container {
  padding: 1rem;
}
.hero-content-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-img {
  object-fit: cover;
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 50%;
  border: 5px solid transparent;
  box-shadow: var(--shadow);
  transition: all 0.3s ease-in;
  object-fit: cover;
}
.hero-content-img:hover .hero-img, .hero-img-mini:hover{
  transform: rotate(-10deg) translate(-8px,-3px);
  border-color: var(--icon-hover);
}

.hero-title{
  font-family: var(--font-title);
  padding: 0;
  font-size: 3rem;
}

.hero-subtitle {
  font-family: var(--font-title);
  padding: 0;
  font-size: 1.8rem;
}
.hero-content-mini p{
  font-family: var(--font-title);
  font-weight: 500;
  line-height: 0;
}
.hero-img-mini {
  width: 100px;
  border: 5px solid transparent;
  box-shadow: var(--shadow);
  border-radius: 50%;
  transition: all 0.3s ease-in;
}
.hero-text {
  line-height: 1.5;
}
@media screen and (max-width: 768px) {
  .hero-content-mini {
    display: none;
  }
  .hero-section {
    position: relative;
    margin-top: 11rem;
    text-align: center;
  }
  .hero-img {
    width: 160px;
    position: absolute;
    top:-10rem
  }
  .hero-title{
  font-size: 2.5rem;
}
.hero-subtitle {
  font-size: 1.55rem;
  line-height: 1.5;
}
.hero-content {
  max-width: 500px;
    display: flex;
  flex-direction: column;
}
.hero-text {
  line-height: 1.3;
}
}

@media screen and (max-width: 480px) {
  .hero {
  display: flex;
  width: 100%;
  }
  .hero-section {
    position: relative;
    margin-top: 9.5rem;
    text-align: center;
  }
  .hero-img {
    width: 160px;
    position: absolute;
    top:-10rem
  }
  .hero-title{
  font-size: 2.1rem;
}
  .hero-subtitle {
  font-size: 1.28rem;
  }
  .hero-text {
    font-size: 0.85rem;
    line-height: 1.2;
  }
}
@media screen and (max-width: 350px) {
  .hero-title {
  font-size: 2rem;
  }
  .hero-subtitle {
  font-size: 1.2rem;
  }
  .hero-text {
    font-size: 0.75rem;
  }
  
}
</style>