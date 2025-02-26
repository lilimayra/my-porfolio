import { Theme } from "@/themes/themeManager";

/**
 * Genera variables CSS para el tema proporcionado
 * @param theme El tema de colores
 * @returns String con variables CSS
 */
export function generateCssVariables(theme: Theme): string {
  let cssVars = ":root {\n";

  // Convertir cada propiedad del tema en una variable CSS
  Object.entries(theme).forEach(([key, value]) => {
    cssVars += `  --${key.toLowerCase()}: ${value};\n`;
  });

  cssVars += "}";
  return cssVars;
}

/**
 * Aplica un tema al documento como variables CSS
 * @param theme El tema a aplicar
 */
export function applyThemeAsCssVariables(theme: Theme): void {
  // Buscar o crear el elemento de estilo para las variables de tema
  let styleEl = document.getElementById("theme-variables");

  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "theme-variables";
    document.head.appendChild(styleEl);
  }

  // Generar y establecer las variables CSS
  styleEl.textContent = generateCssVariables(theme);
}

/**
 * Convierte nombre de variables de tema a formato CSS var()
 * @param themeName Nombre de la variable de tema
 * @returns Formato CSS var()
 */
export function themeToCssVar(themeName: keyof Theme): string {
  return `var(--${String(themeName).toLowerCase()})`;
}

/**
 * Crea un objeto de estilo React a partir de un tema
 * @param theme El tema
 * @param styleMapping Mapeo de propiedades CSS a claves de tema
 * @returns Objeto de estilo React
 */
export function createStylesFromTheme(
  theme: Theme,
  styleMapping: Record<string, keyof Theme>
): React.CSSProperties {
  const styles: Record<string, string> = {};

  Object.entries(styleMapping).forEach(([cssProperty, themeKey]) => {
    styles[cssProperty] = theme[themeKey] as string;
  });

  return styles as React.CSSProperties;
}

/**
 * Ejemplos de uso:
 *
 * // Aplicar tema como variables CSS
 * import themeManager from './themeManager';
 * import { applyThemeAsCssVariables } from './themeUtils';
 *
 * const theme = themeManager.getTheme();
 * applyThemeAsCssVariables(theme);
 *
 * // En un componente:
 * import { createStylesFromTheme } from './themeUtils';
 *
 * const MyComponent = () => {
 *   const theme = themeManager.getTheme();
 *
 *   const styles = createStylesFromTheme(theme, {
 *     backgroundColor: 'BACKGROUND_COLOR',
 *     color: 'TEXT_COLOR'
 *   });
 *
 *   return <div style={styles}>Contenido con tema</div>;
 * };
 *
 * // En CSS usando variables:
 * // .mi-clase {
 * //   background-color: var(--background_color);
 * //   color: var(--text_color);
 * // }
 */
