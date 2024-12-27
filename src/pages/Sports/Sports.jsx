import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import "./Sports.css";
import "../../styles/AppStyle.css";

const Sports = () => {
  return (
    <div>
      <div className="container">
        <Header />

        <div className="image-container">
          <div className="content">
            <h1 className="title">FAÇA PARTE</h1>
            <p className="description">e compita junto à Cybernética</p>
          </div>

          <div className="image" />
        </div>
      </div>

      <div className="secondary-container">
        <div>
          <h3>Futsal</h3>
          <p> {"=>"} Quinta-Feira</p>
          <p> {"=>"} às 14h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
          <a href="./"><p> {"=>"} Grupo do Whatsapp</p></a>
        </div>

        <div>
          <h3>Vôlei</h3>
          <p> {"=>"} Terça-Feira</p>
          <p> {"=>"} às 14h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
          <a href="./"><p> {"=>"} Grupo do Whatsapp</p></a>
        </div>

        <div>
          <h3>Basquete</h3>
          <p> {"=>"} Sexta-Feira</p>
          <p> {"=>"} às 16h até 18h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
          <a href="./"><p> {"=>"} Grupo do Whatsapp</p></a>
        </div>

        <div>
          <h3>Handebol</h3>
          <p> {"=>"} Segunda-Feira</p>
          <p> {"=>"} às 16h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
          <a href="./"><p> {"=>"} Grupo do Whatsapp</p></a>
        </div>
      </div>

      <div className="card-row image-row">
        <ImageCard imageSrc="https://placehold.co/200" title="Diretor de Esportes" />
        <ImageCard imageSrc="https://placehold.co/200" title="Coordenador de Vôlei" />
        <ImageCard imageSrc="https://placehold.co/200" title="Coordenador de Basquete" />
        <ImageCard imageSrc="https://placehold.co/200" title="Coordenador de Futsal" />
      </div>

      <Footer />
    </div>
  );
};

export default Sports;