/**
 * Enforcer de tema oscuro
 * Este script fuerza la aplicación de estilos para el tema oscuro
 * directamente a través de JavaScript, complementando las reglas CSS.
 */

(function () {
  // Comprobar si el tema oscuro está activo cada 100ms
  const checkInterval = setInterval(checkAndEnforceDarkTheme, 100);

  // También activar cuando cambie el DOM
  const observer = new MutationObserver(checkAndEnforceDarkTheme);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  // Función principal de enforcement
  function checkAndEnforceDarkTheme() {
    // Verificar si estamos en modo oscuro
    if (
      document.body.classList.contains("theme-dark") ||
      document.documentElement.classList.contains("theme-dark")
    ) {
      applyDarkThemeStyles();
    }
  }

  // Aplicar estilos oscuros directamente a los elementos
  function applyDarkThemeStyles() {
    // 1. Asegurar que todos los párrafos son de un blanco menos intenso
    document.querySelectorAll("p").forEach((p) => {
      p.style.color = "#E8E8E8";
    });

    // 2. Asegurar que todos los spans son de un blanco menos intenso (excepto en botones)
    document.querySelectorAll("span:not(button span)").forEach((span) => {
      span.style.color = "#E8E8E8";
    });

    // 3. Encabezados en verde similar al original pero luminoso
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
      h.style.color = "#9FE388";
      h.style.textShadow = "0 0 4px rgba(159, 227, 136, 0.4)";
    });

    // 4. Enlaces en verde claro
    document.querySelectorAll("a:not(.bg-gray-800)").forEach((a) => {
      a.style.color = "#D2FFB9";
    });

    // 5. Aplicar colores a las clases específicas de Tailwind
    document
      .querySelectorAll(".text-gray-700, .text-gray-600, .text-gray-800")
      .forEach((el) => {
        el.style.color = "#E8E8E8";
      });

    // 6. Aplicar estilos a las etiquetas
    document.querySelectorAll(".bg-gray-100").forEach((el) => {
      el.style.backgroundColor = "#3A3A3A";
      el.style.borderColor = "#9FE388";
      el.style.borderWidth = "1px";
      el.style.borderStyle = "solid";

      // Y todos sus hijos en blanco menos intenso
      el.querySelectorAll("*").forEach((child) => {
        child.style.color = "#E8E8E8";
      });
    });

    // 7. Textos pequeños en gris claro
    document.querySelectorAll("small, .text-sm").forEach((el) => {
      el.style.color = "#CCCCCC";
    });
  }
})();
