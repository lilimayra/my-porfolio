import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Importar utilidades de tema
import "@/themes/theme-utils.css";
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

// Añadir clase de tema al elemento HTML para posible uso con CSS
themeManager.addThemeChangeListener(() => {
  document.documentElement.className = "";
  document.documentElement.classList.add(
    `theme-${themeManager.getCurrentThemeName().toLowerCase()}`
  );
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
