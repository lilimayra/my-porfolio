// Interfaz para los proyectos (tanto de desarrollo como de diseño)
export interface Project {
  id: number;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any; // La imagen puede ser una importación directa usando import
  description: string;
  url: string;
  tags?: string[]; // Opcional: etiquetas para categorizar proyectos
}

// Tipo para diferenciar los conjuntos de proyectos
export type ProjectsCollection = {
  dev: Project[];
  design: Project[];
};
