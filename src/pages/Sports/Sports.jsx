import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Sports.css";
import "../Home/Atletica/Atletica.css";
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
        </div>

        <div>
          <h3>Vôlei</h3>
          <p> {"=>"} Terça-Feira</p>
          <p> {"=>"} às 14h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>

        <div>
          <h3>Basquete</h3>
          <p> {"=>"} Sexta-Feira</p>
          <p> {"=>"} às 16h até 18h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>

        <div>
          <h3>Handebol</h3>
          <p> {"=>"} Segunda-Feira</p>
          <p> {"=>"} às 16h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>
      </div>

      <div className="card-row image-row">
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Presidente"
            className="card-image"
          />
          <h3 className="card-title">Diretor de Esportes</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Coordenador de Vôlei"
            className="card-image"
          />
          <h3 className="card-title">Coordenador de Vôlei</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Coordenador de Basquete"
            className="card-image"
          />
          <h3 className="card-title">Coordenador de Basquete</h3>
        </div>
        <div className="card">
          <img
            src="https://placehold.co/200"
            alt="Coordenador de Futsal"
            className="card-image"
          />
          <h3 className="card-title">Coordenador de Futsal</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sports;