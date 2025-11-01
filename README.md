<div align=center>

# Portafolio Personal - Carolina Hernández 

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vuedotjs)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Bulma](https://img.shields.io/badge/Bulma-1.x-00d1b2?logo=bulma)](https://bulma.io/)
[![Firebase](https://img.shields.io/badge/Firebase-12.x-FFA611?logo=firebase)](https://firebase.google.com/)

</div>
<div align="center">
  <img src="public/img-perfil3.png" alt="Carolina Hernández" width="150" style="border-radius: 50%;"/>
  
  **Desarrolladora Front-end | Nutricionista | Creando experiencias digitales centradas en el usuario**
  
  [🌐 Ver Portafolio](https://portafolio-dev-vue.web.app/) • [🟦 Linkedin](https://www.linkedin.com/in/carolinahernandezbarra/) • [📧 Contacto](mailto:carolina.fhb@gmail.com)
</div>


## 📖 Sobre el Proyecto

Portafolio profesional desarrollado con Vue.js que muestra mi evolución durante el Bootcamp de Desarrollo Front-end de UNAB. En éste combino habilidades técnicas con diseño centrado en el usuario para crear interfaces web funcionales y accesibles.

### ✨ Características Principales

- 🎨 **Diseño Responsivo** - Adaptable a todos los dispositivos
- ⚡ **Rendimiento Optimizado** - Desarrollado con Vite
- 🔐 **Autenticación Firebase** - Sistema de login seguro
- 🚀 **Single Page Application** - Navegación fluida sin recargas

## 🛠️ Stack Tecnológico

### Frontend
- **Vue.js 3** - Framework principal
- **Vue Router** - Manejo de rutas
- **Bulma CSS** - Framework de estilos
- **JavaScript ES6+** - Lógica de aplicación

### Backend & DevOps
- **Firebase Authentication** - Autenticación de usuarios
- **Firebase Hosting** - Despliegue y hosting
- **Firestore** - Base de datos (en desarrollo)

### Herramientas
- **Vite** - Build tool y dev server
- **Git & GitHub** - Control de versiones

## Estructura del Proyecto
````
src/
├── components/         # Componentes reutilizables
│ ├── AuthModal.vue
│ ├── Hero.vue
│ ├── Navbar.vue
│ ├── Footer.vue
│ ├── Skills.vue
│ └── Welcome.vue
├── pages/              # Vistas/páginas principales
│ ├── Contacto.vue
│ ├── Experiencia.vue
│ ├── Inicio.vue
│ ├── Proyectos.vue
│ └── SobreMi.vue
├── router/             # Configuración de rutas
│ └── index.js
├── stores/             # Configuración de login
│ └── auth.js
├── assets/             # Recursos estáticos
├── App.vue/             #
└── main.js             # Punto de entrada

````

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos para ejecutar localmente

````bash
# Clonar el repositorio 
   git clone https://github.com/CaroHernz/Portafolio-Vue.git
   cd Portafolio-Vue

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Editar .env con tus credenciales de Firebase:
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-id

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

````

## 📈 Próximas Características:

- 🌙 **Modo Oscuro/Claro** - Toggle de tema personalizado
- 📊 Analytics de visitas
- 🔍 Sistema de búsqueda en proyectos

----

#### Creado por:
<div align= center>
  <a href="https://github.com/CaroHernz">Carolina Hernández</a>

**⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!**

</div>