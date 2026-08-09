import React from "react";
import "../NuestroCafe.css";
import { FaWhatsapp } from "react-icons/fa";

function NuestroCafe() {

  const pedirWhatsApp = () => {
    const telefono = "573148272305";

    const mensaje = encodeURIComponent(
      "Hola, estoy interesado en comprar el Café Tradicional Almontea de 500 g."
    );

    window.open(
      `https://wa.me/${telefono}?text=${mensaje}`,
      "_blank"
    );
  };

  return (
    <div className="nuestro-cafe">

      {/* =========================
          HERO / PRODUCTO
      ========================= */}
      <main>

        <section className="cafe-producto">

          <div className="cafe-titulo">
            <h1>Nuestro Café</h1>

            <div className="decoracion">
              <span></span>
              <b>☕</b>
              <span></span>
            </div>
          </div>


          <div className="producto-contenido">

            {/* INFORMACIÓN */}
            <div className="producto-info">

              <h2>
                Café Tradicional
                <br />
                Almontea
              </h2>

              <p className="producto-descripcion">
                Café 100% colombiano, tostado y molido
                para ofrecerte una experiencia única
                en cada taza.
              </p>


              <ul className="caracteristicas">

                <li>
                  <span>✓</span>
                  100% Colombiano
                </li>

                <li>
                  <span>✓</span>
                  Café tostado y molido
                </li>

                <li>
                  <span>✓</span>
                  Aroma intenso
                </li>

                <li>
                  <span>✓</span>
                  Sabor balanceado
                </li>

                <li>
                  <span>✓</span>
                  Ideal para cualquier método
                  de preparación
                </li>

              </ul>


              <button
                className="whatsapp-button producto-whatsapp"
                onClick={pedirWhatsApp}
              >
                PEDIR POR WHATSAPP
                <span></span>
                <FaWhatsapp />
              </button>

            </div>


            {/* PRODUCTO */}
            <div className="producto-imagen">

              <img
                src={`${process.env.PUBLIC_URL}/images/cafe-almontea.png`}
                alt="Café Tradicional Almontea 500 gramos"
              />

            </div>

          </div>

        </section>


        {/* =========================
            VALORES
        ========================= */}
        <section className="valoresNC">

          <div className="valor">

            <div className="valor-icono">
              ♡
            </div>

            <h3>Calidad</h3>

            <p>
              Siempre trabajamos
              para ofrecerte lo mejor.
            </p>

          </div>


          <div className="valor">

            <div className="valor-icono">
              ♧
            </div>

            <h3>Tradición</h3>

            <p>
              Respetamos la herencia
              cafetera de nuestra tierra.
            </p>

          </div>


          <div className="valor">

            <div className="valor-icono">
              ◉
            </div>

            <h3>Pasión</h3>

            <p>
              Amamos lo que hacemos
              y se refleja en cada taza.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default NuestroCafe;