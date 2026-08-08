import { Link } from "react-router-dom";
import "../Footer.css";

function Footer() {

  const pedirWhatsApp = () => {
    const telefono = "573148272305";

    const mensaje = encodeURIComponent(
      "Hola, estoy interesado en comprar el Café Tradicional Almontea."
    );

    window.open(
      `https://wa.me/${telefono}?text=${mensaje}`,
      "_blank"
    );
  };

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
              target="_blank"
              rel="noopener noreferrer"
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

          <Link to="/">
            Inicio
          </Link>

          <Link to="/nuestro-cafe">
            Nuestro Café
          </Link>

          <Link to="/tips-cafeteros">
            Tips Cafeteros
          </Link>

          <Link to="/nosotros">
            Nosotros
          </Link>

        </div>


        {/* ==================================================
            CONTACTO
        ================================================== */}

        <div className="footer-column">

          <h3>
            Contáctanos
          </h3>

          <button
            className="footer-whatsapp"
            onClick={pedirWhatsApp}
          >
            ◯ &nbsp; WhatsApp
          </button>

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