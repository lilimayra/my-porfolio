import { Tab } from "@headlessui/react";
import { CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import DevProjects from "@/components/projectgrid/DevProjects";
import DesignProjects from "@/components/projectgrid/DesignProjects";
import useTheme from "@/themes/useTheme";
import { ThemeName } from "@/themes/themeManager";
import { useEffect } from "react";

const Projects = () => {
  const { themeName } = useTheme();

  // Eliminar el focus-outline azul del navegador con JS para mayor seguridad
  useEffect(() => {
    // Comprueba si estamos en modo oscuro para aplicar soluciones específicas
    const isDarkMode = themeName === ThemeName.DARK;

    // Seleccionamos las pestañas una vez que están en el DOM
    const tabs = document.querySelectorAll('[role="tab"]');

    // También seleccionamos los paneles para asegurarnos de que no tengan bordes
    const panels = document.querySelectorAll(
      '[role="tabpanel"], [id^="headlessui-tabs-panel-"]'
    );

    // Función más agresiva para eliminar bordes, especialmente en modo oscuro
    const removeAllBorders = (element: HTMLElement) => {
      element.style.border = "none";
      element.style.outline = "none";
      element.style.boxShadow = "none";
      element.style.borderWidth = "0";
      element.style.borderStyle = "none";
      element.style.borderColor = "transparent";

      // Si estamos en modo oscuro, aplicamos estilos extra para forzar
      if (isDarkMode) {
        // Añadimos clases directamente
        element.classList.add("no-border", "dark-no-border");

        // Forzamos con !important a través de setProperty
        element.style.setProperty("border", "none", "important");
        element.style.setProperty("outline", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
      }
    };

    // Aplicamos estilos directamente a los paneles
    panels.forEach((panel) => {
      const htmlPanel = panel as HTMLElement;
      removeAllBorders(htmlPanel);

      // Adicional: recorremos todos los hijos directos del panel
      Array.from(htmlPanel.children).forEach((child) => {
        removeAllBorders(child as HTMLElement);
      });
    });

    // Aplicamos estilos directamente a las pestañas
    tabs.forEach((tab) => {
      const htmlTab = tab as HTMLElement;

      htmlTab.addEventListener("focus", () => {
        htmlTab.style.outline = "none";
        if (themeName === ThemeName.LIGHT) {
          htmlTab.style.boxShadow = "0 0 0 2px #3e5835";
        } else if (themeName === ThemeName.DARK) {
          htmlTab.style.boxShadow = "0 0 0 2px #9FE388";
        } else {
          htmlTab.style.boxShadow = "0 0 0 2px #daa121";
        }
      });

      htmlTab.addEventListener("blur", () => {
        htmlTab.style.boxShadow = "none";
      });
    });

    // Limpieza al desmontar
    return () => {
      tabs.forEach((tab) => {
        const htmlTab = tab as HTMLElement;
        htmlTab.removeEventListener("focus", () => {});
        htmlTab.removeEventListener("blur", () => {});
      });
    };
  }, [themeName]);

  // Estilos de pestañas según el tema actual
  const getTabStyles = (selected: boolean) => {
    // Estilos base compartidos entre todos los temas
    const baseStyles =
      "w-full rounded-lg py-3 text-sm font-bold leading-5 flex items-center justify-center gap-2 focus:outline-none focus-visible:outline-none";

    // Estilos específicos según el tema
    if (themeName === ThemeName.DARK) {
      return `${baseStyles} ${
        selected
          ? "bg-dark-surface-2 shadow-md text-green-accent ring-0 focus:ring-0"
          : "text-custom-gray hover:bg-dark-surface hover:text-green-accent focus:ring-green-accent"
      }`;
    } else if (themeName === ThemeName.GREEN) {
      return `${baseStyles} ${
        selected
          ? "bg-white/90 shadow-md text-green-dark border border-gold ring-0 focus:ring-0"
          : "text-grey-600 hover:bg-white/[0.25] hover:border-gold hover:border focus:ring-gold"
      }`;
    }

    // Estilos para el tema LIGHT con corrección de borde
    return `${baseStyles} ${
      selected
        ? "bg-white shadow text-green-dark border-2 border-green-dark ring-0 focus:ring-0"
        : "text-green-dark hover:bg-white/[0.25] hover:text-green-dark focus:ring-green-dark"
    }`;
  };

  // Estilo del contenedor de pestañas según el tema
  const getTabListStyles = () => {
    const baseStyles =
      "flex space-x-2 rounded-xl p-1 max-w-md mx-auto mb-8 shadow-md";

    if (themeName === ThemeName.DARK) {
      return `${baseStyles} bg-dark-surface`;
    } else if (themeName === ThemeName.GREEN) {
      return `${baseStyles} bg-green-transparent-3`;
    }

    return `${baseStyles} bg-green-transparent`;
  };

  // Estilo común para los paneles de pestañas, más agresivo en modo oscuro
  const panelStyles =
    themeName === ThemeName.DARK
      ? "border-0 outline-none shadow-none !border-0 !outline-none !shadow-none no-border dark-no-border"
      : "border-0 outline-none shadow-none";

  // Clase adicional para el contenedor padre en modo oscuro
  const panelsContainerStyles =
    themeName === ThemeName.DARK
      ? "mt-2 border-0 outline-none !border-0 !outline-none tab-panels-container"
      : "mt-2 border-0 outline-none tab-panels-container";

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

        <Tab.Group>
          <Tab.List className={getTabListStyles()}>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                getTabStyles(selected)
              }
            >
              <CodeBracketIcon className="h-5 w-5" />
              <span>DEV</span>
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                getTabStyles(selected)
              }
            >
              <PaintBrushIcon className="h-5 w-5" />
              <span>UX/UI</span>
            </Tab>
          </Tab.List>
          <Tab.Panels className={panelsContainerStyles}>
            <Tab.Panel className={panelStyles}>
              <div className="text-center mb-6">
                <h4 className="text-lg mb-2 font-medium">
                  Proyectos de Desarrollo Web
                </h4>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  Aplicaciones y sitios web desarrollados con diversas
                  tecnologías como React, Vue, JavaScript y más.
                </p>
              </div>
              <DevProjects />
            </Tab.Panel>
            <Tab.Panel className={panelStyles}>
              <div className="text-center mb-6">
                <h4 className="text-lg mb-2 font-medium">
                  Proyectos de Diseño
                </h4>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  Trabajos de diseño gráfico, UX/UI, identidad visual y otras
                  creaciones visuales.
                </p>
              </div>
              <DesignProjects />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Projects;
