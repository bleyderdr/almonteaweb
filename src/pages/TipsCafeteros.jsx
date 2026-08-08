import React from "react";
import "../TipsCafeteros.css";

function TipsCafeteros() {
  return (
    <main className="tips-page">

      {/* =====================================
          ENCABEZADO
      ====================================== */}

      <section className="tips-header">

        <h1>Tips Cafeteros</h1>

        <div className="tips-divider">
          <span></span>
          <span className="coffee-bean">☕</span>
          <span></span>
        </div>

        <p>
          Consejos para que disfrutes siempre
          <br />
          de una mejor taza de café.
        </p>

      </section>


      {/* =====================================
          TIPS
      ====================================== */}

      <section className="tips-list">


        {/* TIP 1 */}

        <article className="tip-card">

          <div className="tip-image">

            <img
              src="/images/tip-cafe-1.jpg"
              alt="Café almacenado correctamente"
            />

          </div>


          <div className="tip-content">

            <div className="tip-number">
              #1
            </div>

            <div className="tip-text">

              <h2>
                ¿Dónde guardar el café?
              </h2>

              <p>
                En un recipiente bien cerrado, en un lugar
                fresco y seco. Así evitas que el aire, la humedad
                y otros olores afecten su aroma.
              </p>

            </div>

          </div>

        </article>


        {/* TIP 2 */}

        <article className="tip-card">

          <div className="tip-image">

            <img
              src="/images/tip-cafe-2.jpg"
              alt="Preparación del café"
            />

          </div>


          <div className="tip-content">

            <div className="tip-number">
              #2
            </div>

            <div className="tip-text">

              <h2>
                ¿Cómo preparar el café perfecto?
              </h2>

              <p>
                La proporción, la temperatura y el tiempo hacen
                la diferencia. Usa agua caliente entre 90°C y 96°C
                y una molienda adecuada para tu método.
              </p>

            </div>

          </div>

        </article>


        {/* TIP 3 */}

        <article className="tip-card">

          <div className="tip-image">

            <img
              src="/images/tip-cafe-3.jpg"
              alt="Café preparado"
            />

          </div>


          <div className="tip-content">

            <div className="tip-number">
              #3
            </div>

            <div className="tip-text">

              <h2>
                Evita la humedad y la luz directa.
              </h2>

              <p>
                Estos factores pueden deteriorar su sabor
                y calidad. Mantén tu café en un lugar alejado
                del calor y de la humedad.
              </p>

            </div>

          </div>

        </article>


      </section>


      {/* =====================================
          BOTÓN
      ====================================== */}

      <div className="tips-button-container">

        <button className="tips-button">
          VER MÁS TIPS
        </button>

      </div>

    </main>
  );
}

export default TipsCafeteros;