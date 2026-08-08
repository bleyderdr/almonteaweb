import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {

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
    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        <img
          src={`${process.env.PUBLIC_URL}/images/historia-cafe.jpg`}
          alt="Caficultor recolectando café colombiano"
        />
      </Link>


      {/* MENÚ */}
      <nav className="navbar-menu">

        <Link to="/">
          INICIO
        </Link>

        <Link to="/nuestro-cafe">
          NUESTRO CAFÉ
        </Link>

        <Link to="/tips-cafeteros">
          TIPS CAFETEROS
        </Link>

        <Link to="/nosotros">
          NOSOTROS
        </Link>

      </nav>


      {/* WHATSAPP */}
      <button
        className="navbar-whatsapp"
        onClick={pedirWhatsApp}
      >
        PEDIR POR WHATSAPP
        <span>◉</span>
      </button>

    </header>
  );
}

export default Navbar;