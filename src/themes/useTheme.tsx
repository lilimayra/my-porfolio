import { useState, useEffect } from "react";
import themeManager, { Theme, ThemeName } from "./themeManager";
import { createStylesFromTheme } from "./themeUtils";

/**
 * Hook personalizado para usar el tema actual en componentes React
 *
 * @returns Objeto con el tema actual, funciones para manipularlo y utilidades
 */
export function useTheme() {
  // Estado local que se actualiza cuando cambia el tema
  const [theme, setTheme] = useState<Theme>(themeManager.getTheme());
  const [themeName, setThemeName] = useState<ThemeName>(
    themeManager.getCurrentThemeName()
  );

  useEffect(() => {
    // Suscribirse a cambios de tema
    const unsubscribe = themeManager.addThemeChangeListener((newTheme) => {
      setTheme(newTheme);
      setThemeName(themeManager.getCurrentThemeName());
    });

    // Limpiar suscripción al desmontar
    return unsubscribe;
  }, []);

  /**
   * Crea estilos de React a partir del tema actual
   * @param styleMapping Mapeo de propiedades CSS a nombres de variables del tema
   * @returns Objeto de estilo React
   */
  const createStyles = (styleMapping: Record<string, keyof Theme>) => {
    return createStylesFromTheme(theme, styleMapping);
  };

  return {
    // Valores
    theme,
    themeName,
    isDefaultTheme: themeName === ThemeName.LIGHT,

    // Acciones
    setTheme: (name: ThemeName) => themeManager.setTheme(name),
    toggleTheme: () => themeManager.toggleTheme(),

    // Utilidades
    createStyles,
  };
}

export default useTheme;
