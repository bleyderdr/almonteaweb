import React from "react";
import Footer from "../components/Footer";
import "../Nosotros.css";

function Nosotros() {
  return (
    <>
      {/* =====================================
          ENCABEZADO
      ====================================== */}

      <section className="nosotros-header">
        <h1>Nosotros</h1>

        <div className="decoracion-cafe">
          <span></span>
          <span className="grano">☕</span>
          <span></span>
        </div>

        <p>
          Conoce la historia, los valores y la esencia de Almontea.
        </p>
      </section>


      {/* =====================================
          NUESTRA HISTORIA
      ====================================== */}

      <section className="nosotros-seccion historia">

        <div className="historia-imagen">
          <img
            src={`${process.env.PUBLIC_URL}/images/historia-almontea.png`}
            alt="Caficultores de Almontea"
          />
        </div>

        <div className="historia-texto">

          <h2>Nuestra historia</h2>

          <p>
            Almontea nace en el corazón de Colombia con el propósito de
            llevar a tu mesa un café de calidad, honrando el trabajo de
            nuestros caficultores y la tradición de nuestra tierra.
          </p>

          <p>
            Creemos que detrás de cada taza existe una historia, un
            esfuerzo y una pasión que merece ser compartida.
          </p>

          <p>
            Por eso seleccionamos cuidadosamente nuestro café para ofrecer
            una experiencia auténtica, desde el productor hasta tu taza.
          </p>

        </div>

      </section>


      {/* =====================================
          NUESTRA MISIÓN
      ====================================== */}

      <section className="nosotros-seccion mision">

        <div className="seccion-icono">
          ☕
        </div>

        <div className="seccion-contenido">

          <h2>Nuestra misión</h2>

          <p>
            Llevar café colombiano de excelente calidad directamente 
            del productor al consumidor, ofreciendo un precio justo y 
            una experiencia que inspire confianza en cada taza.
          </p>

        </div>

      </section>


      {/* =====================================
          NUESTRA VISIÓN
      ====================================== */}

      <section className="nosotros-seccion vision">

        <div className="seccion-contenido">

          <h2>Nuestra visión</h2>

          <p>
            Ser una marca colombiana reconocida por acercar el auténtico 
            sabor del café a las familias, creciendo con calidad, 
            honestidad y cercanía hasta convertirnos en una referencia nacional.

          </p>

        </div>

        <div className="seccion-icono">
          🌱
        </div>

      </section>


      {/* =====================================
          VALORES
      ====================================== */}

      <section className="valores">

        <div className="valores-header">

          <h2>Valores de Almontea</h2>

          <div className="decoracion-cafe">
            <span></span>
            <span className="grano">☕</span>
            <span></span>
          </div>

          <p>
            Lo que representa nuestra marca y nuestra manera de hacer
            las cosas.
          </p>

        </div>


        <div className="valores-grid">

          <div className="valor-card">

            <div className="valor-icono">
              🌿
            </div>

            <h3>Calidad</h3>

            <p>
              Seleccionamos cuidadosamente nuestro café para ofrecer
              siempre una experiencia de calidad.
            </p>

          </div>


          <div className="valor-card">

            <div className="valor-icono">
              ☕
            </div>

            <h3>Tradición</h3>

            <p>
              Respetamos la tradición cafetera colombiana y el conocimiento
              transmitido de generación en generación.
            </p>

          </div>


          <div className="valor-card">

            <div className="valor-icono">
              ❤️
            </div>

            <h3>Pasión</h3>

            <p>
              Amamos lo que hacemos y ponemos dedicación en cada taza
              de café que llega a nuestros clientes.
            </p>

          </div>


          <div className="valor-card">

            <div className="valor-icono">
              🤝
            </div>

            <h3>Compromiso</h3>

            <p>
              Trabajamos para construir relaciones basadas en la confianza,
              el respeto y la responsabilidad.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <Footer />
    </>
  );
}

export default Nosotros;