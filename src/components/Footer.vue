<template>
    <footer class="py-5">
      <div class="footer-container">
        <div class="footer-text">
        <p>
            &copy; {{currentYear}} Carolina Hernández Barra. 
            <br />Todos los derechos reservados.
        </p>
      </div>
      <div class="footer-links ">
          <a href="https://github.com/CaroHernz" target="_blank" rel="noopener noreferrer" class="social-link mr-3">
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/carolinahernandezbarra/" target="_blank" rel="noopener noreferrer" class="social-link mr-3">
            <i class="fa-brands fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:carolina.fhb@gmail.com" class="social-link">
            <i class="fa-solid fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
</template>
<script setup>

const currentYear = new Date().getFullYear();

</script>
<style scoped>
footer {
  width: 100%;
  padding: 1rem;
  margin: 0;
  font-size:14px;
  font-family: var(--font-text);
  background: linear-gradient( 0deg, var(--icon-active) 0%, var(--bg-color) 80%,var(--bg-color) 100%);

}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.2rem;
}
.footer-text {
  flex: 1;
}
.footer-links {
  display: flex;
  gap:0.75rem;
}
.social-link {
  color: var(--text-accent)
}
.footer-links a {
  transform: all 0.3s ease;
  transform: translateY(8px);
}
.footer-links a:hover {
  transform: translateY(12px);
  color:var(--icon-active-text) !important
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap:0.5rem
  }
  .footer-text {
    margin-bottom: 0;
  }
  .footer-links {
    justify-content: center;
  }
}
@media screen and (max-width: 450px) {
  footer {
    padding: 1.5rem 1rem;
  }
  .footer-text, .footer-links {
    font-size: small;
  }
  .footer-links {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>