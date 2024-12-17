import React from "react";
import Header from "../../components/Header/Header";

import NewsSection from "./News/News";
import Atletica from "./Atletica/Atletica";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container" scroll>
        <Header />

        <div className="content">
          <h1 className="title">CYBERNETICA</h1>
          <p className="description">
            Associação Atlética Acadêmica De Ciência da Computação, Análise e
            Desenvolvimento de Sistemas e Ciência de Dados do CEUB
          </p>
        </div>
      </div>

      <NewsSection />

      <Atletica />
    </div>
  );
};

export default Home;
