import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import pidogs from '../images/pidogs.png'
import appclima from '../images/appclima.png'
import ecommerce from '../images/ecommerce.png'
import thumbail from '../images/thumbail.png'
import Tourfy from '../images/Tourfy.png'
import estudio from '../images/estudio.png'
import panel from '../images/panel_wtsp.jpg'
import planilla from '../images/planilla.png'
import templates from '../images/templates.png'
import portal from '../images/Portal_tv.png'

const projects = [
  {
    id: 1,
    title: "Panel Centralizado de WhatsApp",
    company: "Agroquía · Experiencia laboral",
    description: "Sistema multiagente que centraliza toda la comunicación WhatsApp del equipo comercial. Desarrollo full stack con PHP y JavaScript.",
    image: panel,
    tags: ["PHP", "JavaScript", "Bootstrap 4", "MySQL", "WhatsApp API"],
    features: [
      "Panel admin con monitoreo en tiempo real",
      "Buscador de productos similares integrado",
      "Notas internas para operadoras",
      "Templates de mensajes predefinidos",
      "Indicador de 'último mensaje sin respuesta'"
    ],
    impact: "Implementado para 15 operadoras gestionando +5000 chats/mes",
    demo: "/videos/panel-whatsapp.mp4",
    highlight: true
  },
  {
    id: 2,
    title: "Editor Visual para Equipo de Arte",
    company: "Agroquía · Experiencia laboral",
    description: "Herramienta WYSIWYG que permite al equipo de arte crear plantillas gráficas personalizadas sin necesidad de programar.",
    image: templates,
    tags: ["JavaScript", "Canvas API", "PHP", "MySQL", "Bootstrap 4"],
    features: [
      "Posicionamiento XY con drag & drop",
      "Editor de texto con fuentes personalizadas",
      "Selector de colores y fondos",
      "Capas de imágenes con fondo removible",
      "Vista previa en tiempo real"
    ],
    demo: "/videos/editor-arte.mp4",
    highlight: true
  },
  {
    id: 3,
    title: "Portal TV para Operadoras",
    company: "Agroquía · Experiencia laboral",
    description: "Pantalla informativa diseñada para verse desde lejos, con métricas en vivo y novedades del equipo rotando automáticamente.",
    image: portal,
    tags: ["PHP", "JavaScript", "Bootstrap 4", "MySQL", "Ajax"],
    features: [
      "Rotación automática de contenido cada 30 segundos",
      "Métricas en tiempo real: chats pendientes, empresas críticas",
      "Novedades y consejos visibles para todo el equipo",
      "Diseño optimizado para visibilidad lejana"
    ],
    demo: "/videos/portal-tv.mp4",
    highlight: true
  },
  {
    id: 4,
    title: "Tablero de Métricas Administrativas",
    company: "Agroquía · Experiencia laboral",
    description: "Panel administrativo con tablas dinámicas y gráficos para seguimiento de KPIs del negocio.",
    image: planilla,
    tags: ["PHP", "JavaScript", "MySQL", "Chart.js", "DataTables"],
    features: [
      "Filtros avanzados con AJAX sin recargar página",
      "Exportación a Excel/PDF",
      "Gráficos de tendencias con Chart.js",
      "Alertas automáticas cuando un KPI baja de cierto umbral"
    ],
    demo: "/videos/metricas.mp4",
    highlight: true
  },

  // ===== PROYECTOS GRUPALES PROFESIONALES =====
  {
    id: 5,
    title: "Estudio Jurídico",
    company: "Proyecto Grupal · Full Stack",
    description: "Plataforma completa para estudio jurídico con sistema de gestión de causas, turnos y roles diferenciados (cliente, abogado, admin).",
    image: estudio,  // ✅ CORREGIDO
    tags: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Express", "Tailwind"],
    features: [
      "Registro y autenticación con roles",
      "Solicitud de información de causas",
      "Noticias y novedades del estudio",
      "Agendamiento de citas con abogados",
      "Panel de administración"
    ],
    link: "https://estudio-juridico-nolis.vercel.app/Inicio",
    github: "https://github.com/NolisM/estudio-juridico"
  },

  // ===== PROYECTOS PERSONALES DESTACADOS =====
  {
    id: 6,
    title: "PetShop E-commerce",
    company: "Proyecto Personal",
    description: "E-commerce completo con funcionalidades de tienda online y un apartado especial para adopción de mascotas y mascotas perdidas.",
    image: ecommerce,  // ✅ CORREGIDO
    tags: ["React", "Redux", "Firebase", "Mercado Pago"],
    features: [
      "Filtrado y búsqueda de productos",
      "Carrito de compras",
      "Pagos integrados con Mercado Pago",
      "Sistema de reseñas",
      "Módulo de adopción de mascotas",
      "Publicaciones de mascotas perdidas/encontradas"
    ],
    link: "https://petshop-35b9a.web.app",
    github: "https://github.com/NolisM/PetShop"
  },
  {
    id: 7,
    title: "Generador de Miniaturas",
    company: "Proyecto Personal",
    description: "Aplicación que permite a usuarios cargar una imagen y generar tres miniaturas rápidamente, con autenticación segura.",
    image: thumbail,  // ✅ CORREGIDO
    tags: ["Next.js", "React", "Auth0", "Styled Components", "Jest"],
    features: [
      "Carga de imágenes y generación automática",
      "Sistema de autenticación con Auth0",
      "Interfaz intuitiva sin necesidad de conocimientos técnicos",
      "Tests con Jest y React Testing Library"
    ],
    link: "https://sinapsis-code-challenge-u71d.vercel.app",
    github: "https://github.com/NolisM/sinapsis-code-challenge"
  },

  // ===== PROYECTOS GRUPALES DE FORMACIÓN =====
  {
    id: 8,
    title: "Tourfy - Turismo en Córdoba",
    company: "Proyecto Grupal · Codo a Codo",
    description: "Página web interactiva para promover el turismo en Córdoba, con información de destinos populares y promociones.",
    image: Tourfy,  // ✅ CORREGIDO
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "SQL"],
    features: [
      "Información dinámica desde base de datos",
      "Destacados de destinos turísticos",
      "Sección de promociones",
      "Diseño responsive"
    ],
    link: "https://servicios-random.vercel.app/#inicio",
    github: "https://github.com/NolisM/Servicios-Random"
  },

  // ===== PROYECTOS INDIVIDUALES DE FORMACIÓN =====
  {
    id: 9,
    title: "The Dogs",
    company: "Proyecto Individual · Henry",
    description: "SPA que consume datos de una API externa de perros, permitiendo búsqueda, filtrado, ordenamiento y creación de nuevas razas.",
    image: pidogs,  // ✅ CORREGIDO
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    features: [
      "Consumo de API externa",
      "Buscador de razas",
      "Filtros y ordenamientos múltiples",
      "Detalle de cada raza",
      "Creación de nuevas razas con base de datos local"
    ],
    demo: "https://vimeo.com/700141945",
    github: "https://github.com/NolisM/Proyecto-Individual"
  },
  {
    id: 10,
    title: "App del Clima",
    company: "Proyecto Personal",
    description: "Aplicación que consume datos de una API externa para mostrar el clima de diferentes ciudades.",
    image: appclima,  // ✅ CORREGIDO
    tags: ["React", "JavaScript", "API REST", "CSS"],
    features: [
      "Búsqueda de ciudades",
      "Visualización del clima actual",
      "Eliminación de ciudades del listado",
      "Diseño limpio y responsive"
    ],
    demo: "https://vimeo.com/700143137/731e64b27b",
    github: "https://github.com/NolisM/app-clima"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">
          Experiencia laboral, proyectos personales y trabajos grupales
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;