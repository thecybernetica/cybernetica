import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ToggleableOptions from "../../components/ToggleableOptions/ToggleableOptions";

import "./Forms.css";
import "../../styles/AppStyle.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div>
      <Header />
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h1>Faça parte da cybernética</h1>
          <div>
            <label htmlFor="name">Qual seu nome e RA?</label>
            <div className="form-row">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Fulano da Silva"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="space-divider" />
              <input
                type="number"
                id="ra"
                name="ra"
                placeholder="xxxxxxxxxx"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">
              Qual o seu email academico e telefone?
            </label>
            <div className="form-row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@sempreceub.com"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="space-divider" />
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="(61) 99999-9999"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <ToggleableOptions
            options={[
              "Primeiro Semestre",
              "Segundo Semestre",
              "Terceiro Semestre",
              "Quarto Semestre",
              "Quinto Semestre",
              "Sexto Semestre",
              "Sétimo Semestre",
              "Oitavo Semestre",
              "Nono Semestre",
              "Décimo Semestre",
            ]}
            currentValue="Primeiro Semestre"
            onChange={(option) => console.log(option)}
          />
          <div>
            <label htmlFor="message">
              Por que você quer entrar na Cybernética?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Forms;
