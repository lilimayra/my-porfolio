// Paleta de colores principal (Tema Verde - Naturaleza)
export const THEME_GREEN = {
  // Colores base
  TEXT_COLOR: "#4B4B4B",
  HEADING_COLOR: "#3e5835ca",

  // Fondos
  BACKGROUND_GRADIENT: "linear-gradient(to right, #b0dab9, #dad299)",
  CONTAINER_BG: "#ffffffd9",

  // Colores sólidos
  CUSTOM_GRAY: "#888888",
  CUSTOM_DARK_GRAY: "#4B4B4B",
  GREEN_DARK: "#3a6b3a",
  GOLD: "#daa121",
  ACCENT_COLOR: "#3e5835",
  SECONDARY_COLOR: "#dad299",

  // Colores con transparencia
  GREEN_TRANSPARENT_1: "#3e5835cf", // Aproximadamente 81% opacidad
  GREEN_TRANSPARENT_2: "#3e5835ca", // Aproximadamente 79% opacidad
  GREEN_TRANSPARENT_3: "#3e5835b0", // Aproximadamente 69% opacidad
  GREEN_TRANSPARENT_LIGHT: "#3e58351A", // Aproximadamente 10% opacidad
  NAVBAR_BACKGROUND: "rgba(62, 88, 53, 0.1)",
  TRANSLUCENT_BACKGROUND: "rgba(62, 88, 53, 0.5)",
  NAV_BG: "rgba(62, 88, 53, 0.1)",

  // Elementos específicos
  BORDER_LEFT: "#DAA121",
  BORDER_COLOR: "#DAA121",
  BUTTON_BACKGROUND: "#daa121",
  BUTTON_TEXT: "white",
  LOGO_COLOR: "#3e5835",
  NAV_LINK_COLOR: "#3e5835",
  NAV_LINK_HOVER_COLOR: "#daa121",
};

// Paleta de colores claros (Tema Light - Blanco y Crudo con acento verde)
export const THEME_LIGHT = {
  // Colores base
  TEXT_COLOR: "#4B4B4B",
  HEADING_COLOR: "#3e5835",

  // Fondos
  BACKGROUND_GRADIENT: "linear-gradient(135deg, #FEFEFE, #F5F2E9)",
  CONTAINER_BG: "#ffffffd9",

  // Colores sólidos
  CUSTOM_GRAY: "#888888",
  CUSTOM_DARK_GRAY: "#4B4B4B",
  GREEN_ACCENT: "#3e5835",
  CREAM: "#F5F2E9",
  CREAM_LIGHT: "#FAF7F2",
  CREAM_DARK: "#E8E2D5",
  OFF_WHITE: "#FEFEFE",
  GOLD: "#daa121",
  ACCENT_COLOR: "#3e5835",
  SECONDARY_COLOR: "#F5F2E9",

  // Colores con transparencia
  GREEN_TRANSPARENT: "rgba(62, 88, 53, 0.7)",
  CREAM_TRANSPARENT: "rgba(245, 242, 233, 0.3)",
  NAVBAR_BACKGROUND: "rgba(245, 242, 233, 0.7)",
  TRANSLUCENT_BACKGROUND: "rgba(245, 242, 233, 0.7)",
  NAV_BG: "rgba(245, 242, 233, 0.7)",

  // Elementos específicos
  BORDER_LEFT: "#3e5835",
  BORDER_COLOR: "#3e5835",
  BUTTON_BACKGROUND: "#daa121",
  BUTTON_TEXT: "white",
  LOGO_COLOR: "#3e5835",
  NAV_LINK_COLOR: "#3e5835",
  NAV_LINK_HOVER_COLOR: "#daa121",
};

// Paleta de colores oscuros (Tema Dark - Oscuro con acentos suaves)
export const THEME_DARK = {
  // Colores base
  TEXT_COLOR: "#E8E8E8",
  HEADING_COLOR: "#9FE388",

  // Fondos
  BACKGROUND_GRADIENT: "linear-gradient(135deg, #323438, #232323)",
  CONTAINER_BG: "#2D2D2DF5",

  // Colores sólidos
  CUSTOM_GRAY: "#E8E8E8",
  CUSTOM_DARK_GRAY: "#CCCCCC",
  GREEN_ACCENT: "#9FE388",
  DARK_BG: "#1A1A1A",
  DARK_SURFACE: "#2D2D2D",
  DARK_SURFACE_2: "#3A3A3A",
  ACCENT_COLOR: "#9FE388",
  SECONDARY_COLOR: "#3A3A3A",
  GOLD: "#FFE147",

  // Colores con transparencia
  GREEN_TRANSPARENT: "rgba(159, 227, 136, 0.4)",
  DARK_TRANSPARENT: "rgba(45, 45, 45, 0.9)",
  NAVBAR_BACKGROUND: "rgba(45, 45, 45, 0.9)",
  TRANSLUCENT_BACKGROUND: "rgba(45, 45, 45, 0.8)",
  NAV_BG: "rgba(45, 45, 45, 0.9)",

  // Elementos específicos
  BORDER_LEFT: "#9FE388",
  BORDER_COLOR: "#9FE388",
  BUTTON_BACKGROUND: "#FFE147",
  BUTTON_TEXT: "#121212",
  LOGO_COLOR: "#9FE388",
  NAV_LINK_COLOR: "#E8E8E8",
  NAV_LINK_HOVER_COLOR: "#FFE147",
};

// Mantener compatibilidad con código existente
export const THEME_CURRENT = THEME_GREEN;
export const THEME_CREAM = THEME_LIGHT;

// Exportación de valores por defecto (tema verde)
export default THEME_GREEN;

/**
 * INSTRUCCIONES DE USO:
 *
 * 1. Importar el tema deseado en tu archivo CSS o componente:
 *    import { THEME_LIGHT, THEME_DARK, THEME_GREEN } from '../themes/colors';
 *
 * 2. Seleccionar el tema activo:
 *    const activeTheme = THEME_DARK; // O cualquier otro tema
 *
 * 3. Aplicar colores:
 *    const styles = {
 *      color: activeTheme.TEXT_COLOR,
 *      backgroundColor: activeTheme.CONTAINER_BG,
 *    };
 *
 * 4. Para añadir nuevas paletas, crea un nuevo objeto siguiendo el mismo formato
 *    export const THEME_NUEVO = { ... };
 */
