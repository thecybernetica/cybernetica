import React from "react";

import ImageCard from "../../../components/ImageCard/ImageCard";

import "./Atletica.css";

const Atletica = () => {
  return (
    <div className="atletica">
      <h1>A atlética</h1>
      <div className="image-row">
        <ImageCard imageSrc="https://placehold.co/200" title="Presidente" />
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Vice-Presidente"
        />
        <ImageCard imageSrc="https://placehold.co/200" title="Diretor Geral" />
        <ImageCard imageSrc="https://placehold.co/200" title="Jurídico" />
      </div>
      <div className="image-row">
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Diretor de Produtos"
        />
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Diretor de E-Sports"
        />
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Diretor de E-Sports"
        />
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Diretor de Eventos"
        />
      </div>
      <div className="image-row">
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Diretor de Marketing"
        />
        <ImageCard
          imageSrc="https://placehold.co/200"
          title="Diretor de Esportes"
        />
        {/* Empty cards */}
        <div className="card"></div>
        <div className="card"></div>
      </div>

      <a href="/atletica" className="see-more">
        Ver mais
      </a>
    </div>
  );
};

export default Atletica;
