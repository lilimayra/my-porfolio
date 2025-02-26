import ProjectGrid from "@/components/projectgrid/ProjectGrid";
import React, { useState, useEffect } from "react";
import themeManager, { ThemeName } from "@/themes/themeManager";

const Projects = () => {
  return (
    <section id="Proyectos" className="mt-16">
      <div className="flex items-center my-6">
        <div className="flex-grow border-t boder-custom"></div>
        <h2 className="px-4 text-2xl font-bold text-center">MIS PROYECTOS</h2>
        <div className="flex-grow border-t boder-custom"></div>
      </div>
      <div className="my-4 py-4 px-4">
        <h3 className="text-center text-xl font-bold">
          Una selección de cosas que he construido
        </h3>
        <p className="text-center text-gray-600 mt-2 mb-6 max-w-2xl mx-auto">
          Aquí puedes explorar algunos de mis proyectos más destacados. Cada uno
          representa diferentes habilidades y tecnologías que he utilizado en mi
          camino como desarrolladora frontend y diseñadora.
        </p>

        <ProjectGrid />
      </div>
    </section>
  );
};

export default Projects;
