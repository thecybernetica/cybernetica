import React from "react";
import "./Footer.css";
import "../../styles/AppStyle.css";

const Footer = () => {
  // TODO: Add links
  return (
    <footer className="footer">
      <div className="contact-section">
        <div className="contact-info">
          <p>
            Associação Atlética Acadêmica de Ciência da
            Computação, Análise e Desenvolvimento de Sistemas, Ciência de Dados
            e Cybersegurança.
          </p>
          <h4>CPNJ: 00.000-000/0000-00</h4>

          <p className="button">Fale com o nosso Jurídico.</p>
        </div>

        <div className="space-divider" />

        <div className="contact-info">
          <h3>Contato e Suporte</h3>
          <a href="https://wa.me/5561984860447">WhatsApp</a> <br />
          <a href="https://instagram.com/atletica.cybernetica">Instagram</a>
          <br />
          <a href="mailto:atleticacybernetica@gmail.com">E-mail</a> <br />
          <a href="/faq">FAQ</a> <br />
        </div>

        <div className="space-divider" />

        <div className="contact-info">
          <h3>Links Úteis</h3>
          <a href=".">Twitch</a> <br />
          <a href=".">Discord</a> <br />
          <a href=".">Grupo de Calouros</a> <br />
          <a href=".">Provas Passadas</a> <br />
          <a href=".">Fotos</a> <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
