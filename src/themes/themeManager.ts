import * as colors from "@/themes/colors";
import { applyThemeAsCssVariables } from "@/themes/themeUtils";

// Tipo más flexible para los temas
export type Theme = Record<string, string | number | any>;

// Nombres de temas disponibles
export enum ThemeName {
  GREEN = "GREEN",
  LIGHT = "LIGHT",
  DARK = "DARK",
}

// Mapa de temas disponibles
const themes: Record<ThemeName, Theme> = {
  [ThemeName.GREEN]: colors.THEME_GREEN,
  [ThemeName.LIGHT]: colors.THEME_LIGHT,
  [ThemeName.DARK]: colors.THEME_DARK,
};

/**
 * Gestor de temas con patrón Singleton
 * Permite cambiar entre diferentes paletas de colores y notificar a los componentes
 */
class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: ThemeName = ThemeName.GREEN;
  private listeners: Array<(theme: Theme) => void> = [];

  private constructor() {
    // Aplicar tema inicial
    this.applyTheme();

    // Inicialización: detectar preferencia de modo oscuro del sistema
    this.detectSystemColorScheme();

    // Escuchar cambios en la preferencia del sistema
    this.listenToSystemColorSchemeChanges();
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  /**
   * Obtiene el tema actual
   */
  public getTheme(): Theme {
    return themes[this.currentTheme];
  }

  /**
   * Obtiene el nombre del tema actual
   */
  public getCurrentThemeName(): ThemeName {
    return this.currentTheme;
  }

  /**
   * Establece un nuevo tema
   * @param themeName Nombre del tema a establecer
   * @returns Éxito de la operación
   */
  public setTheme(themeName: ThemeName): boolean {
    if (!themes[themeName]) {
      console.error(`Theme '${themeName}' not found`);
      return false;
    }

    this.currentTheme = themeName;
    this.applyTheme();
    this.notifyListeners();
    return true;
  }

  /**
   * Alterna entre los temas disponibles en el orden: GREEN -> LIGHT -> DARK -> GREEN...
   * @returns El nombre del nuevo tema activo
   */
  public toggleTheme(): ThemeName {
    const themeNames = [ThemeName.GREEN, ThemeName.LIGHT, ThemeName.DARK];
    const currentIndex = themeNames.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    const nextTheme = themeNames[nextIndex];

    this.setTheme(nextTheme);
    return this.currentTheme;
  }

  /**
   * Añade un tema personalizado
   * @param name Nombre del tema
   * @param themeColors Definición de colores del tema
   */
  public addTheme(name: string, themeColors: Theme): void {
    if ((ThemeName as any)[name]) {
      console.warn(`Theme name '${name}' already exists. Overwriting.`);
    }

    // Añadir al enum dinámicamente
    (ThemeName as any)[name] = name;

    // Añadir a la colección de temas
    (themes as any)[name] = themeColors;
  }

  /**
   * Añade un listener para cambios de tema
   * @param listener Función a ejecutar cuando cambie el tema
   * @returns Función para eliminar el listener
   */
  public addThemeChangeListener(listener: (theme: Theme) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  /**
   * Detecta la preferencia de color del sistema y aplica el tema correspondiente
   * si no hay una preferencia guardada por el usuario
   */
  private detectSystemColorScheme(): void {
    // Solo aplicar tema automáticamente si no hay preferencia guardada
    if (!localStorage.getItem("preferred-theme")) {
      // Siempre usar el tema GREEN (planta) por defecto
      this.setTheme(ThemeName.GREEN);

      // Nota: Se ha desactivado la detección automática de modo oscuro/claro
      // para priorizar el tema verde como predeterminado
      // Código original:
      // if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //   this.setTheme(ThemeName.DARK);
      // } else {
      //   this.setTheme(ThemeName.LIGHT);
      // }
    }
  }

  /**
   * Configura un listener para detectar cambios en la preferencia de color del sistema
   */
  private listenToSystemColorSchemeChanges(): void {
    // Desactivado para mantener el tema GREEN como predeterminado
    // Código original:
    // if (window.matchMedia) {
    //   window.matchMedia("(prefers-color-scheme: dark)")
    //     .addEventListener("change", (e) => {
    //       // Solo cambiar automáticamente si no hay preferencia explícita del usuario
    //       if (!localStorage.getItem("preferred-theme")) {
    //         this.setTheme(e.matches ? ThemeName.DARK : ThemeName.LIGHT);
    //       }
    //     });
    // }
  }

  /**
   * Notifica a todos los listeners sobre el cambio de tema
   */
  private notifyListeners(): void {
    const currentTheme = this.getTheme();
    this.listeners.forEach((listener) => {
      try {
        listener(currentTheme);
      } catch (error) {
        console.error("Error in theme change listener:", error);
      }
    });
  }

  /**
   * Aplica el tema actual al documento
   */
  private applyTheme(): void {
    const theme = this.getTheme();

    // Aplicar el fondo al body
    if (theme.BACKGROUND_GRADIENT) {
      document.body.style.background = theme.BACKGROUND_GRADIENT as string;
    }

    // Aplicar variables CSS
    applyThemeAsCssVariables(theme);
  }
}

// Exportar una instancia única
const themeManager = ThemeManager.getInstance();
export default themeManager;
