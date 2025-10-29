<template>
    <div class="content">
      <Hero variant="main" />
      <div class="inicio-content">
          <div class="title-inicio">Bienvenid<span class="title-inicio-a">@</span> a mi Portafolio</div>
          <div class="is-size-5 has-text-grey">Aquí encontrarás mis proyectos, mi camino de transformación y cómo puedo aportar valor a tu equipo.</div>
          <Skills :displayType="'icon-only'" />
          <div class="is-size-6 has-text-grey">¿Quieres conocer más sobre mí?</div>
          <div class="buttons btn-cta is-justify-content-end py-3">
            <a class="button is-rounded is-grey has-text-info-40" href="mailto:carolina.fhb@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-at fa-lg pr-1"></i> Escríbeme</a>
            <a class="button is-rounded is-grey has-text-info-40" href="https://www.linkedin.com/in/carolinahernandezbarra/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-lg pr-1"></i> Conectemos</a>
            <a class="button is-rounded is-grey has-text-info-40" href="https://github.com/CaroHernz" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-lg pr-1"></i> Mi Código</a>
            <a class="button is-rounded is-grey has-text-info-40" href="https://github.com/CaroHernz" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-import fa-lg pr-1"></i> Ver CV</a>
            <a class="button is-rounded is-grey has-text-info-40" href="/proyectos" rel="noopener noreferrer"><i class="fa-solid fa-folder-open fa-lg pr-1"></i> Mis Proyectos</a>
            <a class="button is-rounded is-grey has-text-info-40" href="https://wa.me/56978903516" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp fa-lg pr-1"></i> Hablemos</a>
          </div>
        </div>
    </div>
</template>
<script setup>
import Hero from "../components/Hero.vue";
import Skills from "../components/Skills.vue";
</script>
<style scoped>
.title-inicio {
  font-size: 90px;
  font-weight: 600;
  line-height: 1.1;
  opacity: 0.3;
  font-family: var(--font-title);
  padding: 2rem 0 1rem 0;
}
.title-inicio-a {
  display: inline-block;
  color:var(--icon-active-text);
  transition: all 0.5s ease-in-out;
  cursor:progress
}
.title-inicio-a:hover {
  color:var(--text-accent);
  transform: rotate(360deg)
}
</style>