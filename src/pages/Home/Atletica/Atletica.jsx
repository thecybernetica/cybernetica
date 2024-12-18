import React from "react";

import "./Atletica.css";

const Atletica = () => {
  return (
    <div className="atletica">
      <h1>A atlética</h1>
      <div className="image-row">
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Presidente"
            className="card-image"
          />
          <h3 className="card-title">Presidente</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Vice-Presidente"
            className="card-image"
          />
          <h3 className="card-title">Vice-Presidente</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor Geral"
            className="card-image"
          />
          <h3 className="card-title">Diretor Geral</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Jurídico"
            className="card-image"
          />
          <h3 className="card-title">Jurídico</h3>
        </div>
      </div>
      <div className="image-row">
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor de Produtos"
            className="card-image"
          />
          <h3 className="card-title">Diretor de Produtos</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor de e-sports"
            className="card-image"
          />
          <h3 className="card-title">Diretor de E-Sports</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor de E-Sports"
            className="card-image"
          />
          <h3 className="card-title">Diretor de E-Sports</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor de Eventos"
            className="card-image"
          />
          <h3 className="card-title">Diretor de Eventos</h3>
        </div>
      </div>
      <div className="image-row">
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor de Marketing"
            className="card-image"
          />
          <h3 className="card-title">Diretor de Marketing</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Diretor de Esportes"
            className="card-image"
          />
          <h3 className="card-title">Diretor de Esportes</h3>
        </div>
        <div className="card">
          {/* <img
            src="https://placehold.co/200"
            alt="Jurídico"
            className="card-image"
          />
          <h3 className="card-title">Jurídico</h3> */}
        </div>
        <div className="card">
          {/* <img
            src="https://placehold.co/200"
            alt="Jurídico"
            className="card-image"
          />
          <h3 className="card-title">Jurídico</h3> */}
        </div>
      </div>

      <h3 className="see-more">Ver mais</h3>
    </div>
  );
};

export default Atletica;
