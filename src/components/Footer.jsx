function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">


        {/* ==================================================
            MARCA
        ================================================== */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="footer-logo-icon">
              ☕
            </div>

            <h2>
              ALMONTEA
            </h2>

            <span>
              CAFÉ TRADICIONAL
            </span>

          </div>


          <p>
            Café 100% colombiano, tostado y molido
            para conservar su aroma y sabor auténtico.
            <br />
            Del productor a tu taza.
          </p>


          {/* REDES SOCIALES */}

          <div className="social-links">

            <a
              href="https://www.instagram.com/cafealmontea/"
              aria-label="Instagram"
            >
              ◎
            </a>


          </div>

        </div>


        {/* ==================================================
            ENLACES
        ================================================== */}

        <div className="footer-column">

          <h3>
            Enlaces
          </h3>

          <a href="/">
            Inicio
          </a>

          <a href="/nuestro-cafe">
            Nuestro Café
          </a>

          <a href="/tips-cafeteros">
            Tips Cafeteros
          </a>

          <a href="/nosotros">
            Nosotros
          </a>

          <a href="/contacto">
            Contacto
          </a>

        </div>


        {/* ==================================================
            CONTACTO
        ================================================== */}

        <div className="footer-column">

          <h3>
            Contáctanos
          </h3>

          <a
            href="https://wa.me/573148272305"
            target="_blank"
            rel="noopener noreferrer"
          >
            ◯ &nbsp; WhatsApp
          </a>

          <a href="tel:+573148272305">
            ☎ &nbsp; 57 314 827 2305
          </a>

          <a href="mailto:almontea.cafe@gmail.com">
            ◎ &nbsp; almontea.cafe@gmail.com
          </a>

          <span>
            ◉ &nbsp; Colombia
          </span>

        </div>

      </div>


      {/* ==================================================
          COPYRIGHT
      ================================================== */}

      <div className="footer-bottom">

        <p>
          © 2026 Almontea. Todos los derechos reservados.
        </p>

      </div>

    </footer>

  );
}

export default Footer;