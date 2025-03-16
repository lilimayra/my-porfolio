// Generate CV PDF
import PDFDocument from "pdfkit";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the public directory exists
fs.mkdirSync(path.join(__dirname, "../public"), { recursive: true });

// Create a new PDF document
const doc = new PDFDocument({
  size: "A4",
  margin: 50,
});

doc.pipe(fs.createWriteStream(path.join(__dirname, "../public/cv.pdf")));

// Add circular profile image
doc.save();
doc.circle(500, 70, 40).clip();
doc.image(path.join(__dirname, "../public/me.jpeg"), 460, 30, {
  width: 80,
});
doc.restore();

// SVG paths from Lucide icons (simplified versions)
const ICONS = {
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
  linkedin:
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  github:
    "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
};

// Helper function to draw SVG icon
const drawIcon = (iconPath, x, y) => {
  doc.save();
  doc.translate(x, y);
  doc.scale(0.7);
  doc.path(iconPath).stroke("#374151");
  doc.restore();
};

// Helper function to add contact item with icon
const addContactItem = (iconKey, text, y, columnGap = 0) => {
  drawIcon(ICONS[iconKey], 60 + columnGap, y - 2);
  doc
    .fontSize(12)
    .font("Helvetica")
    .fillColor("#374151")
    .text(text, 90 + columnGap, y);
};

const addSectionTitle = (text, y) => {
  doc.fontSize(16).font("Helvetica-Bold").fillColor("#333").text(text, 50, y);
  doc.moveDown();
};

const addContent = (text, options = {}) => {
  doc.fontSize(12).font("Helvetica").fillColor("#374151").text(text, options);
  doc.moveDown(0.5);
};

// Header
doc
  .fontSize(24)
  .font("Helvetica-Bold")
  .fillColor("#333")
  .text("Mayra Sánchez", 50, 50, { align: "center" });

doc
  .fontSize(16)
  .font("Helvetica")
  .fillColor("#6b7280")
  .text("Frontend Developer & UI/UX Designer", { align: "center" });

// Contact Information
doc.moveDown(4);
const startY = doc.y;
const lineHeight = 25;
const columnGap = 300;

// Columna izquierda
addContactItem("phone", "+34 693 517 883", startY);
addContactItem("mail", "lilimayra@gmail.com", startY + lineHeight);

// Columna derecha
addContactItem("linkedin", "linkedin.com/in/maysanzv/", startY, columnGap);
addContactItem("github", "github.com/maysanz", startY + lineHeight, columnGap);

doc.moveDown(3);

// Professional Summary
addSectionTitle("Perfil Profesional", doc.y);

doc.fontSize(12).fillColor("#374151");
doc
  .font("Helvetica")
  .text(
    "Diseñadora y desarrolladora front-end impulsada por la curiosidad y la creatividad. Me especializo en crear interfaces atractivas y funcionales, combinando mis habilidades de diseño con conocimientos técnicos.",
    50,
    doc.y,
    { align: "justify" }
  );
doc.moveDown(0.5);

addContent(
  "Mi experiencia en diseño y desarrollo me permite entender tanto la parte visual como la técnica de los proyectos, aportando una perspectiva integral al desarrollo frontend."
);

// Technical Skills
doc.moveDown();
addSectionTitle("Habilidades Técnicas", doc.y);

doc.fontSize(12).fillColor("#374151");
doc.font("Helvetica").text("• Frontend: ", 50, doc.y, { continued: true });
doc.font("Helvetica-Bold").text("React", { continued: true });
doc.font("Helvetica").text(", ", { continued: true });
doc.font("Helvetica-Bold").text("Vue.js", { continued: true });
doc.font("Helvetica").text(", JavaScript, HTML5, CSS3", { continued: false });
doc.moveDown(0.5);

doc.font("Helvetica").text("• Design: ", 50, doc.y, { continued: true });
doc.font("Helvetica-Bold").text("Figma", { continued: true });
doc.font("Helvetica").text(", UI/UX, Responsive Design", { continued: false });
doc.moveDown(0.5);

doc
  .font("Helvetica")
  .text("• CSS Frameworks: ", 50, doc.y, { continued: true });
doc.font("Helvetica-Bold").text("Tailwind CSS", { continued: true });
doc.font("Helvetica").text(", Bootstrap", { continued: false });
doc.moveDown(0.5);

doc
  .font("Helvetica")
  .text("• Tools & Others: ", 50, doc.y, { continued: true });
doc.font("Helvetica-Bold").text("Git", { continued: true });
doc
  .font("Helvetica")
  .text(", GitHub, Agile Methodologies", { continued: false });
doc.moveDown(0.5);

// Work Experience
doc.moveDown();
addSectionTitle("Experiencia Profesional", doc.y);

// Billder Fintech
doc
  .fontSize(12)
  .font("Helvetica-Bold")
  .fillColor("#374151")
  .text("Frontend Developer - Billder Fintech (2024)", 50, doc.y);
doc
  .font("Helvetica")
  .fillColor("#374151")
  .text(" - Valencia, Spain", { continued: false });
doc.moveDown(0.5);

addContent(
  "• Desarrollo de una solución fintech para trabajadores de la construcción"
);
addContent("• Implementación con React, Vite, TypeScript y Tailwind");
addContent("• Trabajo en equipo utilizando metodologías ágiles");
doc.moveDown(0.5);

// Proyectos Frontend
doc
  .font("Helvetica-Bold")
  .text("Frontend Developer - Freelance (2022-Present)", 50, doc.y);
doc.font("Helvetica").text(" - Valencia, Spain", { continued: false });
doc.moveDown(0.5);
addContent("• Creación de catálogos web con HTML, CSS y JavaScript");
addContent("• Desarrollo de carritos de compra e interfaces interactivas");
addContent(
  "• Implementación de diseños responsivos para diversos dispositivos"
);

// Education
doc.moveDown();
addSectionTitle("Formación", doc.y);
addContent("Máster en Desarrollo Frontend - IDECREA (2023)");
addContent("TrainingCamp IT - Igrowker (2024)");

// Projects
doc.moveDown();
addSectionTitle("Proyectos Frontend Destacados", doc.y);

doc.fontSize(12).font("Helvetica-Bold").text("Billder Fintech", 50, doc.y);
doc.moveDown(0.5);
addContent(
  "Solución fintech para trabajadores de la construcción, enfocada en innovación Tech for Labor."
);
addContent("• https://billder.netlify.app/");

doc
  .fontSize(12)
  .font("Helvetica-Bold")
  .text("Catálogo Handmade Design", 50, doc.y);
doc.moveDown(0.5);
addContent(
  "Sitio web para personalizar hogares con piezas artesanales únicas, desarrollado con HTML y SASS."
);
addContent("• handmadedesigns.netlify.app/");

doc
  .fontSize(12)
  .font("Helvetica-Bold")
  .text("Cart Shopping Handmade Design", 50, doc.y);
doc.moveDown(0.5);
addContent(
  "Carrito de compras para el catálogo Handmade Design, desarrollado con HTML, CSS y JavaScript."
);
addContent("• handmadedesigns-cart.netlify.app");

doc
  .fontSize(12)
  .font("Helvetica-Bold")
  .text("Cart Shopping Jewelry", 50, doc.y);
doc.moveDown(0.5);
addContent(
  "Catálogo de productos para una joyería, desarrollado con HTML, CSS y JavaScript."
);
addContent("• astonishing-tulumba-8c3592.netlify.app");

doc.end();

console.log("CV generated successfully at public/cv.pdf");
