// Generate example CV PDF
import PDFDocument from "pdfkit";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, "../public/cv.pdf");

// Definir colores que coincidan con el tema del portfolio
const colors = {
  primary: "#3e5835", // Verde principal del tema
  secondary: "#daa121", // Dorado/amarillo secundario
  text: "#4B4B4B", // Color de texto principal
  lightText: "#888888", // Color de texto más claro
};

// Create a document
const doc = new PDFDocument({ margin: 50 });

// Pipe the PDF to a file
doc.pipe(fs.createWriteStream(publicPath));

// Add content to the PDF
doc
  .font("Helvetica-Bold")
  .fontSize(24)
  .fillColor(colors.primary)
  .text("CURRICULUM VITAE", { align: "center" })
  .moveDown(2);

// Personal information
doc.fillColor(colors.primary).fontSize(16).text("Información Personal");

doc
  .font("Helvetica")
  .fontSize(12)
  .fillColor(colors.text)
  .moveDown(0.5)
  .text("Nombre: Mayra Sánchez", { continued: false })
  .moveDown(0.5)
  .text("Email: lilimayra@gmail.com", { continued: false })
  .moveDown(0.5)
  .text("Teléfono: +34 693 517 883", { continued: false })
  .moveDown(0.5)
  .text("Ubicación: Valencia, España")
  .moveDown(0.5)
  .text("Portfolio: http://porfolio-maysanz.netlify.app/")
  .moveDown(1.5);

// Summary
doc
  .font("Helvetica-Bold")
  .fillColor(colors.primary)
  .fontSize(16)
  .text("Perfil Profesional")
  .moveDown(0.5);

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text(
    "Diseñadora y desarrolladora front-end impulsada por la curiosidad y la creatividad. Me especializo en crear interfaces atractivas y funcionales, combinando mis habilidades de diseño con conocimientos técnicos. Mi experiencia en diseño y desarrollo me permite entender tanto la parte visual como la técnica de los proyectos, aportando una perspectiva integral al desarrollo frontend.",
    { align: "justify" }
  )
  .moveDown(1.5);

// Skills
doc
  .font("Helvetica-Bold")
  .fillColor(colors.primary)
  .fontSize(16)
  .text("Habilidades")
  .moveDown(0.5);

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("• Diseño UI/UX")
  .text("• Desarrollo Frontend (React, Vue.js)")
  .text("• HTML5, CSS3, JavaScript")
  .text("• Tailwind CSS, Bootstrap")
  .text("• Responsive Design")
  .text("• Figma")
  .text("• Control de versiones (GitHub)")
  .moveDown(1.5);

// Experience
doc
  .font("Helvetica-Bold")
  .fillColor(colors.primary)
  .fontSize(16)
  .text("Experiencia Profesional")
  .moveDown(0.5);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.secondary)
  .fontSize(12)
  .text("Proyecto Billder Fintech, TrainingCamp IT de Igrowker, 2024");

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text(
    "• Desarrollo de una solución fintech para trabajadores de la construcción"
  )
  .text("• Implementación con React, Vite, TypeScript y Tailwind")
  .text("• Trabajo en equipo utilizando metodologías ágiles")
  .moveDown(1);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.secondary)
  .fontSize(12)
  .text("Proyectos de Desarrollo Frontend, 2022 - Presente");

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("• Creación de catálogos web con HTML, CSS y JavaScript")
  .text("• Desarrollo de carritos de compra e interfaces interactivas")
  .text("• Implementación de diseños responsivos para diversos dispositivos")
  .moveDown(1.5);

// Education
doc
  .font("Helvetica-Bold")
  .fillColor(colors.primary)
  .fontSize(16)
  .text("Educación")
  .moveDown(0.5);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.secondary)
  .fontSize(12)
  .text("Máster en Desarrollo Frontend, IDECREA, 2023");

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("• Especialización en tecnologías web modernas")
  .text(
    "• Refuerzo de habilidades técnicas y creativas en el campo del desarrollo web"
  )
  .moveDown(1);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.secondary)
  .fontSize(12)
  .text("TrainingCamp IT, Igrowker, 2024");

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text("• Formación intensiva en desarrollo de aplicaciones web")
  .text(
    "• Trabajo en equipo para desarrollar un proyecto complejo con metodologías de la industria"
  )
  .moveDown(1.5);

// Projects
doc
  .font("Helvetica-Bold")
  .fillColor(colors.primary)
  .fontSize(16)
  .text("Proyectos Destacados")
  .moveDown(0.5);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.secondary)
  .fontSize(12)
  .text("Billder Fintech para albañiles");

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text(
    "Solución fintech para albañiles y trabajadores de la construcción, enfocada en innovación Tech for Labor."
  )
  .moveDown(0.5);

doc
  .font("Helvetica-Bold")
  .fillColor(colors.secondary)
  .fontSize(12)
  .text("Catálogo Handmade Design");

doc
  .font("Helvetica")
  .fillColor(colors.text)
  .fontSize(12)
  .text(
    "Sitio web para personalizar hogares con piezas artesanales únicas, desarrollado con HTML y SASS."
  )
  .moveDown(1.5);

// Footer with generated date
const today = new Date();
doc
  .fontSize(10)
  .fillColor(colors.lightText)
  .text(`Generado el ${today.toLocaleDateString("es-ES")}`, {
    align: "center",
  });

// Finalize the PDF
doc.end();

console.log("CV personalizado generado en public/cv.pdf");
