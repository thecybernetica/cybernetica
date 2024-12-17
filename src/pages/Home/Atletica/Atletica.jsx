import React from "react";

import "./Atletica.css";

const Atletica = () => {
  return <div className="atletica">
    <h1>A atlética</h1>
    <div className="image-row">
        <img src="https://placehold.co/200" alt="Presidente" className="image-card" />
        <img src="https://placehold.co/200" alt="Vice-Presidente" className="image-card" />
        <div className="image-card" />
        <img src="https://placehold.co/200" alt="Jurídico" className="image-card" />
    </div>
    <div className="image-row">
        <img src="https://placehold.co/200" alt="Presidente" className="image-card" />
        <img src="https://placehold.co/200" alt="Vice-Presidente" className="image-card" />
        <img src="https://placehold.co/200" alt="Vice-Presidente" className="image-card" />
        <img src="https://placehold.co/200" alt="Jurídico" className="image-card" />
    </div>
    <div className="image-row">
        <img src="https://placehold.co/200" alt="Presidente" className="image-card" />
        <img src="https://placehold.co/200" alt="Vice-Presidente" className="image-card" />
        <div className="image-card" />
        <div className="image-card" />
    </div>

    <h3 className="see-more">Ver mais</h3>
  </div>;
};

export default Atletica;
