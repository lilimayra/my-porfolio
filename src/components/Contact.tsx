const Contact = () => {
  return (
    <section className="flex justify-center mt-16" id="Contacto">
      <div className="p-4 w-full max-w-lg">
        <div className="flex-grow border-t boder-custom"></div>

        <div className="py-4 mx-auto">
          <h2 className="text-center mb-4 text-xl font-bold">
            ¿Quieres comunicarte conmigo? ¡Encuéntrame en las siguientes
            plataformas digitales!
          </h2>

          <div className="flex justify-center space-x-4">
            <a
              href="mailto:lilimayra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 hover:text-gold transition-colors"
            >
              <i className="bx bxl-gmail text-3xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maysanzv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 hover:text-gold transition-colors"
            >
              <i className="bx bxl-linkedin text-3xl"></i>
            </a>
            <a
              href="https://github.com/lilimayra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 hover:text-gold transition-colors"
            >
              <i className="bx bxl-github text-3xl"></i>
            </a>
          </div>
        </div>

        <div className="flex-grow border-t boder-custom"></div>
      </div>
    </section>
  );
};

export default Contact;
