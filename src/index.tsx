import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Importar utilidades de tema
import "@/themes/theme-utils.css";
// Importar los estilos forzados para el tema oscuro (DEBE SER LA ÚLTIMA IMPORTACIÓN CSS)
import "@/themes/dark-theme-forced.css";
// Importar script enforcer para tema oscuro
import "@/themes/dark-theme-enforcer.js";
import App from "@/App";

// Importar el sistema de temas (se inicializará automáticamente)
import themeManager, { ThemeName } from "@/themes/themeManager";

// Opcionalmente, cargar la preferencia de tema guardada
const savedTheme = localStorage.getItem("preferred-theme");
if (savedTheme && Object.values(ThemeName).includes(savedTheme as ThemeName)) {
  try {
    themeManager.setTheme(savedTheme as ThemeName);
  } catch (error) {
    console.error("Error al cargar tema guardado:", error);
  }
}

// Guardar preferencia cuando cambie
themeManager.addThemeChangeListener(() => {
  localStorage.setItem("preferred-theme", themeManager.getCurrentThemeName());
});

// Añadir clase de tema a los elementos HTML y BODY para posible uso con CSS
themeManager.addThemeChangeListener(() => {
  const themeName = `theme-${themeManager.getCurrentThemeName().toLowerCase()}`;

  document.documentElement.className = "";
  document.documentElement.classList.add(themeName);

  document.body.className = document.body.className
    .replace(/theme-\w+/g, "")
    .trim();
  document.body.classList.add(themeName);

  setTimeout(() => {
    document.body.style.display = "none";
    const height = document.body.offsetHeight;
    console.log("Forcing reflow, current height:", height);
    document.body.style.display = "";
  }, 50);
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
