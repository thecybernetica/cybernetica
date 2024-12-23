import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
          <p> {"=>"} Quinta-Feira, às 14h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>

        <div>
          <h3>Vôlei</h3>
          <p> {"=>"} Terça-Feira, às 14h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>

        <div>
          <h3>Basquete</h3>
          <p> {"=>"} Sexta-Feira, às 16h até 18h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>

        <div>
          <h3>Handebol</h3>
          <p> {"=>"} Segunda-Feira, às 16h até 17h</p>
          <p> {"=>"} CEUB Asa Norte Bloco 04</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sports;