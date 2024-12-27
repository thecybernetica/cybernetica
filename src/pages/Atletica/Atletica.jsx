import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Atletica.css";
import "../Home/Atletica/Atletica.css";

const Atletica = () => {
  return (
    <div>
      <Header />

      <div className="atletica">
        <p>Conheça a </p>
        <h1>Atletica Cybernética</h1>

        <h3>Presidência</h3>
        <div>
          <div className="card">
            <img
              src="https://placehold.co/200"
              alt="Presidência"
              className="card-image"
            />
            <h3 className="card-title">Diretor Geral</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Atletica;
