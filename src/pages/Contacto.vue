<template>
    <div class="content">
      <p class="title-content">Contacto</p>
        <i class=" title-content-icon fa-regular fa-envelope-open mr-2"></i>
      <div class="title-content-mobile">
        <i class=" title-icon fa-regular fa-envelope-open mr-2"></i>
        <p>Contacto</p>
        </div>
        <div class="text-content">
          <p class="is-size-6 has-text-grey">¡Hablemos! <br>Estoy abierta a oportunidades como <b>Desarrolladora Front-End</b>, colaboraciones en proyectos o simplemente para intercambiar ideas. 
            <br>Puedes encontrarme en: </p>

      <div class="contacto-links buttons py-1 is-justify-content-right">
        <a class="contacto-link" href="https://www.linkedin.com/in/carolinahernandezbarra/" target="_blank" rel="noopener noreferrer" data-tooltip="Linkedin"><i class="fa-brands fa-linkedin fa-2xl mr-4"></i></a>
        <a href="https://github.com/CaroHernz" target="_blank" class="contacto-link" rel="noopener noreferrer" data-tooltip="GitHub" ><i class="fa-brands fa-github fa-2xl mr-4"></i></a>
        <a href="https://drive.google.com/file/d/1UIQHIr5qv4DykueFbO7569vFObe9Qy-A/view?usp=sharing" target="_blank" class="contacto-link" rel="noopener noreferrer" data-tooltip="Currículum"><i class="fa-solid fa-file-export fa-2xl mr-4"></i></a>
        <a href="mailto:carolina.fhb@gmail.com" target="_blank" class="contacto-link" rel="noopener noreferrer" data-tooltip="Correo"><i class="fa-solid fa-envelope fa-2xl mr-4"></i></a>
        <a href="https://wa.me/56978903516" target="_blank" class="contacto-link" rel="noopener noreferrer" data-tooltip="WhatsApp"><i class="fa-brands fa-whatsapp fa-2xl mr-4"></i></a>
      </div>
      <p class="is-size-6 has-text-grey">O envíame un mensaje directo:</p>

      <div class="formulario">
        <form @submit.prevent="sendEmail" ref="contactForm">
          <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Nombre</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left p-0 m-0">
                <input class="input is-info" v-model="formData.from_name" type="text" placeholder="Nombre" required maxlength="50" name="from_name" @input="validateName"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <p class="help has-text-info-35">
              {{ formData.from_name.length }}/50 caracteres
              <span v-if="nameError" class="has-text-danger-60"> - {{ nameError }}</span>
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
                <input class="input is-info" type="email" v-model="formData.from_email" placeholder="tu_correo@mail.com" required name="from_email"/>
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
                <textarea class="textarea is-info" v-model="formData.message" placeholder="Escribe tu mensaje..." minlength="10" maxlength="500" name="message" @input="validateMessage" required></textarea>
              </div>
              <p class="help has-text-info-35">
              {{ formData.message.length }}/500 caracteres
              <span v-if="messageError" class="has-text-danger-60"> - {{ messageError }}</span>
            </p>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered pt-5">
          <p class="control">
            <button type="submit" class="button is-info has-text-white" :disabled="isSubmitting || hasErrors">
              {{isSubmitting ? 'Enviando...' : 'Enviar'}}
            </button>
          </p>
          <p class="control">
            <a class="button is-info is-outlined" @click="resetForm">
              Cancelar
            </a>
          </p>
        </div>
        </form>
      </div>
        </div>

      <div class="mt-6">
        <Hero/>
      </div>
    </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import emailjs from '@emailjs/browser'
import Hero from '../components/Hero.vue'

const formData = ref({
  from_name: '',
  from_email: '',
  message: ''
})

const isSubmitting= ref(false)
const contactForm= ref(null)
const nameError = ref('')
const messageError = ref('')

const validateName = () => {
  const name = formData.value.from_name;
  
  if (name.length < 2) {
    nameError.value = 'El nombre debe tener al menos 2 caracteres';
  } else if (name.length > 50) {
    nameError.value = 'El nombre no puede tener más de 50 caracteres';
  } else {
    nameError.value = '';
  }
};

// Validación del mensaje
const validateMessage = () => {
  const message = formData.value.message;
  
  if (message.length < 10) {
    messageError.value = 'El mensaje debe tener al menos 10 caracteres';
  } else if (message.length > 500) {
    messageError.value = 'El mensaje no puede tener más de 500 caracteres';
  } else {
    messageError.value = '';
  }
};

// Computed property para deshabilitar el botón si hay errores
const hasErrors = computed(() => {
  return nameError.value !== '' || 
         messageError.value !== '' || 
         formData.value.from_name.length < 2 || 
         formData.value.message.length < 10;
});

// Watchers para validación automática
watch(() => formData.value.from_name, validateName);
watch(() => formData.value.message, validateMessage);

const sendEmail = async () => {
  validateName()
  validateMessage()

  if (nameError.value || messageError.value) {
    alert('Por favor, corrige los errores en el formulario.');
    return;
  }

  if(!formData.value.from_name || !formData.value.from_email || !formData.value.message) {
    alert('Por favor, completa todos los campos.')
    return
  }

  isSubmitting.value = true

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY_SERVICE,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY_TEMPLATE,
      contactForm.value,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    alert('¡Mensaje enviado! Te contactaré pronto')
    resetForm()
  } catch(error) {
    console.error('Error al enviar:', error)
    alert('Hubo un error al enviar el mensaje. Por favor,intenta nuevamente.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value.from_name = ''
  formData.value.from_email= ''
  formData.value.message = ''
  nameError.value = '';
  messageError.value = '';
}
</script>
<style scoped>
.contacto-links i {
  color: var(--icon-active-text);
  transition: all 0.3s ease;
}
.contacto-links i:hover {
  color: var(--text-accent);
  transform: rotate(-20deg) translate(-3px,-2px);
}
.contacto-link:hover {
  position: relative;
  display: inline-flex;
}

.contacto-link::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(96, 96, 96, 0.8);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}
.contacto-link:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(50%);
}
</style>