import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import NuestroCafe from "./pages/NuestroCafe";
import TipsCafeteros from "./pages/TipsCafeteros.jsx";
import Nosotros from "./pages/Nosotros.jsx";

function App() {

  return (

    <BrowserRouter>

      {/* NAVBAR GLOBAL */}
      <Navbar />

      {/* PÁGINAS */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/nuestro-cafe"
          element={<NuestroCafe />}
        />

        <Route
          path="/tips-cafeteros"
          element={<TipsCafeteros />}
        />

        <Route
          path="/nosotros"
          element={<Nosotros />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;