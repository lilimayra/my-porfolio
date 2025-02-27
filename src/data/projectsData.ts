import { Project, ProjectsCollection } from "@/types/projectTypes";

// Importación de imágenes para proyectos
import primerProyecto from "@/assets/img/catalogo.png";
import joya from "@/assets/img/joya.png";
import veterinaria from "@/assets/img/veterinaria.png";
import work from "@/assets/img/work.png";
import billder from "@/assets/img/proyectoBillder.png";

// Proyectos de desarrollo web
export const devProjects: Project[] = [
  {
    id: 1,
    title: "Catálogo Handmade Design",
    image: primerProyecto,
    description:
      "Este proyecto fue parte de mi aprendizaje en IDECREA, utilizando HTML y SASS. Es un sitio web para personalizar hogares con piezas artesanales únicas, incluyendo plantas de esquejes que aportan un toque distintivo.",
    url: "https://handmadedesigns.netlify.app",
    tags: ["HTML", "SASS", "Diseño Responsivo"],
  },
  {
    id: 2,
    title: "Carrito de Compra Handmade Design",
    image: work,
    description:
      "Un carrito de compras intuitivo hecho con JavaScript y CSS. Facilita agregar productos con un solo clic y permite revisar y ajustar la selección antes de finalizar la compra, asegurando una experiencia rápida y fluida.",
    url: "https://handmadedesigns-cart.netlify.app",
    tags: ["JavaScript", "CSS", "UX"],
  },
  {
    id: 3,
    title: "Joyas de Acero",
    image: joya,
    description:
      "Catálogo de joyas y accesorios únicos, creado con Vue y Bootstrap. Explora diseños elegantes y añade tus favoritos al carrito de compras.",
    url: "https://astonishing-tulumba-8c3592.netlify.app",
    tags: ["Vue", "Bootstrap"],
  },
  {
    id: 4,
    title: "Administrador de Pacientes",
    image: veterinaria,
    description:
      "Herramienta para veterinarias desarrollada en Vue y Tailwind. Facilita la gestión de registros, citas y tratamientos de pacientes.",
    url: "https://astonishing-tulumba-8c3592.netlify.app",
    tags: ["Vue", "Tailwind"],
  },
  {
    id: 5,
    title: "Billder Fintech para albañiles",
    image: billder,
    description:
      "Proyecto del TrainindCamo IT de igrowker. Solución fintech para albañiles y trabajadores de la construcción, desarrollada con React, Vite, TypeScript y Tailwind. Innovación en el sector Tech for Labor.",
    url: "https://billder.netlify.app/auth/login",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
  },
];

// Proyectos de diseño UX/UI
export const designProjects: Project[] = [
  {
    id: 1,
    title: "Diseño de Identidad Visual",
    image: work, // Se usa imagen provisional
    description:
      "Creación de identidad de marca completa, incluyendo logo, paleta de colores, tipografía y aplicaciones para una empresa emergente de productos sostenibles.",
    url: "#",
    tags: ["Branding", "Identidad Visual"],
  },
  {
    id: 2,
    title: "Diseño UX/UI Aplicación Móvil",
    image: work, // Se usa imagen provisional
    description:
      "Diseño de experiencia de usuario para una aplicación de seguimiento de hábitos saludables, incluyendo wireframes, prototipos interactivos y pruebas de usabilidad.",
    url: "#",
    tags: ["UX/UI", "Prototipos", "Figma"],
  },
  {
    id: 3,
    title: "Rediseño de Plataforma Web",
    image: work, // Se usa imagen provisional
    description:
      "Renovación completa de la interfaz de usuario para una plataforma educativa existente, mejorando la usabilidad y actualizando la estética para atraer a una audiencia más joven.",
    url: "#",
    tags: ["Rediseño", "UI", "Educación"],
  },
  {
    id: 4,
    title: "Ilustraciones para Campaña Digital",
    image: work, // Se usa imagen provisional
    description:
      "Serie de ilustraciones personalizadas para una campaña en redes sociales, con un estilo coherente y adaptable a diferentes formatos y plataformas.",
    url: "#",
    tags: ["Ilustración", "Redes Sociales"],
  },
];

// Colección completa de proyectos
export const projectsCollection: ProjectsCollection = {
  dev: devProjects,
  design: designProjects,
};
