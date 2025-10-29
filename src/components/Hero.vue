<template>
  <div class="hero">
    <section v-if="variant === 'main'" class="hero-section-main has-text-right">
      <div class="columns">
        <div class="hero-content column pr-3">
            <div class=" has-text-weight-bold has-text-grey hero-title">
              Hola! <span class='has-text-info-50'>Soy Carolina</span>
            </div>
            <div class="  has-text-weight-semibold has-text-info-30 hero-subtitle">
              Desarrolladora Front-end
            </div>
            <small class='has-text-grey-dark'>Nutricionista resolutiva con base en Data Science.
              <br />Me gusta construir interfaces web funcionales y centradas en el usuario. <br />
              <router-link class="button has-background-info-50 py-0 mt-2 has-text-info-100 is-rounded has-text-weight-semibold" to="/proyectos">
                Ver Proyectos Destacados <i class="fa-solid fa-arrow-right-long pl-2"></i>
              </router-link>
            </small>
          </div>
          <div class="column-1 hero-content-img">
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
}
.hero-content {
  line-height: 1.1;
}
.hero-mini-container {
  padding: 1rem;
}
.hero-content-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid transparent;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease-in;
}
.hero-img {
  object-fit: cover;
}
.hero-content-img:hover , .hero-img-mini:hover{
  transform: rotate(-10deg) translate(-8px,-3px);
  border-color: var(--icon-hover);
}

.hero-title{
  font-family: var(--font-title);
  padding: 0;
  font-size: 3.6rem;
}

.hero-subtitle {
  font-family: var(--font-title);
  padding: 0;
  font-size: 2.2rem;
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
@media screen and (max-width: 768px) {
  .hero-content-img,
  .hero-img {
    display: none;
  }
  .hero-content-mini {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .hero {
  display: flex;
  width: 100%;
  }
  .hero-title {
  font-size: 2.5rem;
  }
  .hero-subtitle {
  font-size: 1.5rem;
  }
}
@media screen and (max-width: 350px) {
  .hero-title {
  font-size: 2rem;
  }
  .hero-subtitle {
  font-size: 1.2rem;
  }
}
</style>