import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

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


  const cerrarMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="navbar">

      {/* ==================================================
          LOGO
      ================================================== */}

      <Link
        to="/"
        className="navbar-logo"
        onClick={cerrarMenu}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/logo-almontea.png`}
          alt="Almontea Café Tradicional"
        />
      </Link>


      {/* ==================================================
          MENÚ
      ================================================== */}

      <nav
        className={`navbar-menu ${
          menuOpen ? "navbar-menu-open" : ""
        }`}
      >

        <Link
          to="/"
          onClick={cerrarMenu}
        >
          INICIO
        </Link>


        <Link
          to="/nuestro-cafe"
          onClick={cerrarMenu}
        >
          NUESTRO CAFÉ
        </Link>


        <Link
          to="/tips-cafeteros"
          onClick={cerrarMenu}
        >
          TIPS CAFETEROS
        </Link>


        <Link
          to="/nosotros"
          onClick={cerrarMenu}
        >
          NOSOTROS
        </Link>


        {/* WHATSAPP DENTRO DEL MENÚ MÓVIL */}

        <button
          className="navbar-whatsapp-mobile"
          onClick={() => {
            cerrarMenu();
            pedirWhatsApp();
          }}
        >
          PEDIR POR WHATSAPP
        </button>

      </nav>


      {/* ==================================================
          WHATSAPP DESKTOP
      ================================================== */}

      <button
        className="navbar-whatsapp"
        onClick={pedirWhatsApp}
      >
        PEDIR POR WHATSAPP
        <span>  </span>
        <FaWhatsapp />
      </button>


      {/* ==================================================
          BOTÓN HAMBURGUESA
      ================================================== */}

      <button
        className={`navbar-toggle ${
          menuOpen ? "navbar-toggle-open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? "Cerrar menú"
            : "Abrir menú"
        }
        aria-expanded={menuOpen}
      >

        <span></span>
        <span></span>
        <span></span>

      </button>

    </header>
  );
}

export default Navbar;