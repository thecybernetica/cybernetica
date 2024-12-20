import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-content">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div> */}

      <div className="footer-section">
        <p>AAACybernetica</p>
        <p>
          AAACybernética Associação Atlética Acadêmica de Ciência da Computação,
          Análise e Desenvolvimento de Sistemas, Ciência de Dados e Cybersegurança.
        </p>
        <h4>CPNJ: 00.000-000/0000-00</h4>

        <p className="juridico-button">Fale com o nosso Jurídico.</p>
      </div>
      <div className="divider" />
      <div className="footer-section"></div>
      <div className="divider" />
      <div className="footer-section"></div>
    </footer>
  );
};

export default Footer;
