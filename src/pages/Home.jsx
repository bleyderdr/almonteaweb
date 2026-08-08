import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {

  const whatsappNumber = "573148272305";

  const whatsappMessage = encodeURIComponent(
    "Hola, estoy interesado en comprar el Café Tradicional Almontea de 500 g. ¿Podrían darme información?"
  );

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="home">

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-almontea.jpg)`,
        }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">
            CAFÉ TRADICIONAL
          </p>

          <h1>
            Café Tradicional
            <br />

            <span>
              100% Colombiano
            </span>
          </h1>

          <h2>
            Del productor a tu taza.
          </h2>

          <p className="hero-description">
            Café tostado y molido, cuidadosamente
            seleccionado para conservar su aroma
            y sabor auténtico.
          </p>

          <div className="hero-buttons">

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              PEDIR POR WHATSAPP
              <span>◉</span>
            </a>

            <link
              to="/nuestro-cafe"
              className="btn-secondary"
            >
              CONOCE MÁS
            </link>

          </div>

        </div>

      </section>


      {/* ==================================================
          CARACTERÍSTICAS
      ================================================== */}

      <section className="features">

        {/* 100% COLOMBIANO */}

        <div className="feature">

          <div className="feature-icon">
            🌱
          </div>

          <div>
            <h3>
              100% Colombiano
            </h3>

            <p>
              Granos seleccionados
              de las mejores regiones
              cafeteras.
            </p>
          </div>

        </div>


        {/* TOSTADO */}

        <div className="feature">

          <div className="feature-icon">
            ☕
          </div>

          <div>
            <h3>
              Tostado Artesanal
            </h3>

            <p>
              Tostamos en pequeños
              lotes para conservar
              su aroma y sabor.
            </p>
          </div>

        </div>


        {/* AROMA */}

        <div className="feature">

          <div className="feature-icon">
            🍃
          </div>

          <div>
            <h3>
              Aroma y Sabor
            </h3>

            <p>
              Café con cuerpo,
              aroma intenso y sabor
              balanceado.
            </p>
          </div>

        </div>


        {/* EMPAQUE */}

        <div className="feature">

          <div className="feature-icon">
            📦
          </div>

          <div>
            <h3>
              Empaque Resellable
            </h3>

            <p>
              En un recipiente bien
              cerrado para conservar
              su frescura.
            </p>
          </div>

        </div>

      </section>


      {/* ==================================================
          NUESTRA HISTORIA
      ================================================== */}

      <section className="history-section1">

        {/* IMAGEN */}

        <div className="history-image">

          <img
            src="/images/historia-cafe.jpg"
            alt="Caficultor recolectando café colombiano"
          />

        </div>


        {/* TEXTO */}

        <div className="history-content">

          <h2>
            Nuestra Historia
          </h2>

          <p>
            Almontea nace en el corazón de Colombia
            con el propósito de llevar a tu mesa un café
            de calidad, honrando el trabajo de nuestros
            caficultores y la tradición de nuestra tierra.
          </p>

          <link
            to="/nosotros"
            className="history-button"
          >
            CONÓCENOS MEJOR
          </link>

        </div>

      </section>


      {/* ==================================================
       NUESTRO PRODUCTO
       ================================================== */}

      <section className="product-section1">

        <div className="products-header">

          <p className="section-label">
            NUESTRO CAFÉ
          </p>

          <h2>
            Café Tradicional
            <br />
            <span>Almontea</span>
          </h2>

          <p className="product-description">
            Nuestro café tradicional es 100% colombiano,
            tostado y molido para conservar su aroma,
            sabor y frescura.
          </p>

        </div>


        {/* PRODUCTOS */}

        <div className="productos-grid">


          {/* =========================
        PRODUCTO 1 LIBRA
    ========================== */}

          <article className="product-card">

            <div className="product-image">

              <img
                src="/images/producto-almontea-media-libra.jpeg"
                alt="Café Tradicional Almontea de 1 libra"
              />

            </div>


            <div className="product-info">

              <h3>
                Café Tradicional
              </h3>

              <p className="product-weight">
                1 Libra · 500 g
              </p>

              <div className="product-price">
                $17.000
              </div>


              <div className="product-buttons">

                <link
                  to="/nuestro-cafe"
                  className="product-button saber-mas"
                >
                  SABER MÁS
                </link>


                <a
                  href="https://wa.me/573148272305?text=Hola%20Almontea,%20estoy%20interesado%20en%20el%20café%20de%201%20libra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-button whatsapp-button"
                >
                  WHATSAPP
                </a>

              </div>

            </div>

          </article>



          {/* =========================
        PRODUCTO MEDIA LIBRA
    ========================== */}

          <article className="product-card">

            <div className="product-image">

              <img
                src="/images/producto-almontea-media-libra.jpeg"
                alt="Café Tradicional Almontea de media libra"
              />

            </div>


            <div className="product-info">

              <h3>
                Café Tradicional
              </h3>

              <p className="product-weight">
                Media Libra · 250 g
              </p>

              <div className="product-price">
                $9.000
              </div>


              <div className="product-buttons">

                <a
                  href="/nuestro-cafe"
                  className="product-button saber-mas"
                >
                  SABER MÁS
                </a>


                <a
                  href="https://wa.me/573148272305?text=Hola%20Almontea,%20estoy%20interesado%20en%20el%20café%20de%20media%20libra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-button whatsapp-button"
                >
                  WHATSAPP
                </a>

              </div>

            </div>

          </article>

        </div>

      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />

    </div>
  );
}

export default Home;