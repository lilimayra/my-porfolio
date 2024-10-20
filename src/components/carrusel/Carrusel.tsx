import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

import primerProyecto from "../../assets/img/catalogo.png";
import joya from "../../assets/img/joya.png";
import veterinaria from "../../assets/img/veterinaria.png";
import work from "../../assets/img/work.png";
import billder from "../../assets/img/proyectoBillder.png";
import flechaIzquierda from "../../assets/img/iconos/flecha-izquierda.png";

const projects = [
  {
    id: 1,
    title: "Catálogo Handmade Design",
    image: primerProyecto,
    description:
      "Este proyecto fue parte de mi aprendizaje en IDECREA, utilizando HTML y SASS. Es un sitio web para personalizar hogares con piezas artesanales únicas, incluyendo plantas de esquejes que aportan un toque distintivo.",
    url: "https://handmadedesigns.netlify.app",
  },
  {
    id: 2,
    title: "Carrito de Compra Handmade Design",
    image: work,
    description:
      "Un carrito de compras intuitivo hecho con JavaScript y CSS. Facilita agregar productos con un solo clic y permite revisar y ajustar la selección antes de finalizar la compra, asegurando una experiencia rápida y fluida.",
    url: "https://handmadedesigns-cart.netlify.app",
  },
  {
    id: 3,
    title: "Joyas de Acero",
    image: joya,
    description:
      "Catálogo de joyas y accesorios únicos, creado con Vue y Bootstrap. Explora diseños elegantes y añade tus favoritos al carrito de compras.",
    url: "https://astonishing-tulumba-8c3592.netlify.app",
  },
  {
    id: 4,
    title: "Administrador de Pacientes",
    image: veterinaria,
    description:
      "Herramienta para veterinarias desarrollada en Vue y Tailwind. Facilita la gestión de registros, citas y tratamientos de pacientes.",
    url: "https://astonishing-tulumba-8c3592.netlify.app",
  },

  {
    id: 5,
    title: "Billder Fintech para albañiles",
    image: billder,
    description:
      "Proyecto del TrainindCamo IT de igrowker. Solución fintech para albañiles y trabajadores de la construcción, desarrollada con React, Vite, TypeScript y Tailwind. Innovación en el sector Tech for Labor.",
    url: "https://billder.netlify.app/auth/login",
  },
];

const ProjectCarousel = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={false}
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="p-1">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 md:h-auto object-cover"
              />
              <h3 className="mt-2 text-center text-xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-2 text-justify text-gray-600">
                {project.description}
              </p>
              <div className="mt-4 text-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block  button  hover:bg-yellow-500 transition"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-8 right-2  cursor-pointer">
        <img
          src={flechaIzquierda}
          alt="Deslizar"
          className="w-6 h-6 opacity-75 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
