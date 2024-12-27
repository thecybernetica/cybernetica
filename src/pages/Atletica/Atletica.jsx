import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";

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
        <div className="image-row">
          <ImageCard imageSrc="https://placehold.co/200" title="Presidenta" />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Vice-Presidente"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Diretor Geral"
          />
          <ImageCard imageSrc="https://placehold.co/200" title="Jurídico" />
          <ImageCard />
        </div>

        <h3>Esportes</h3>
        <div className="image-row">
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Diretor de Esportes"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Futsal"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Vôlei"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Basquete"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Handebol"
          />
        </div>

        <h3>E-Sports</h3>
        <div className="image-row">
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Diretor de E-Sports"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de LoL"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Valorant"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de CS:GO"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Free Fire"
          />
        </div>

        <h3>Eventos</h3>
        <div className="image-row">
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Diretor de Eventos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Eventos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Eventos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Eventos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Eventos"
          />
        </div>

        <h3>Marketing</h3>
        <div className="image-row">
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Diretor de Marketing"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Marketing"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Marketing"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Marketing"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Marketing"
          />
        </div>

        <h3>Produtos</h3>
        <div className="image-row">
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Diretor de Produtos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Produtos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Produtos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Produtos"
          />
          <ImageCard
            imageSrc="https://placehold.co/200"
            title="Coordenador de Produtos"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Atletica;
