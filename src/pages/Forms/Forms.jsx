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
          <h3>Informações Pessoais</h3>
          <div>
            <label htmlFor="name">Qual seu nome, telefone e Instagram?</label>
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
                type="phone"
                id="phone"
                name="phone"
                placeholder="(61) 99999-9999"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="space-divider" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="@fulano.silva"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Qual o seu email academico e RA?</label>
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
                type="ra"
                id="ra"
                name="ra"
                placeholder="xxxxxxxx"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Qual o seu campus?</label>
          <ToggleableOptions
            options={["Asa Norte", "Taguatinga"]}
            currentValue="Asa Norte"
            onChange={(option) => console.log(option)}
          />

          <label>Qual o seu curso e semestre?</label>
          <ToggleableOptions
            options={[
              "Ciência da Computação",
              "Análise e Desenvolvimento de Sistemas",
              "Ciência de Dados",
              "Cybersegurança",
            ]}
            currentValue="Asa Norte"
            onChange={(option) => console.log(option)}
          />
          <ToggleableOptions
            options={[
              "Primeiro",
              "Segundo",
              "Terceiro",
              "Quarto",
              "Quinto",
              "Sexto",
              "Sétimo",
              "Oitavo",
            ]}
            currentValue="Primeiro Semestre"
            onChange={(option) => console.log(option)}
          />

          <h3>Experiências</h3>
          <div>
            <label htmlFor="message">
              Quais são seus interesses e a sua disponibilidade?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">
              Você já participou de alguma atlética ou projeto semelhante?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">
              Está disposto(a) a participar de campanhas ou atividades de
              integração? Aqui todos nós ajudamos em todos os eventos, não
              importa a sua diretoria.
            </label>
            <ToggleableOptions
              options={["SIM", "NÃO"]}
              currentValue="Primeiro Semestre"
              onChange={(option) => console.log(option)}
            />
          </div>
          <div>
            <label htmlFor="message">
              Tem experiência em organização de eventos ou competições? Se sim,
              discorra sobre.
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">
              Possui habilidades relacionadas a TI que possam contribuir com a
              atlética? (Ex.: design, desenvolvimento de sistemas, marketing
              digital)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <h3>Motivação</h3>

          <div>
            <label htmlFor="message">
              Em qual diretoria você gostaria de atuar e por quê?
            </label>
            <ToggleableOptions
              options={[
                "E-Sports",
                "Marketing",
                "Eventos",
                "Esportes",
                "Produtos",
                "Financeiro",
              ]}
              currentValue=""
              onChange={(option) => console.log(option)}
            />
          </div>
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

          <h3>Entrevista</h3>
          <div>
            <label htmlFor="message">Espaço Aberto</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">
              O que você mudaria na cyber? Faça uma crítica, elogio, pode falar!
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">
              Fale um pouco sobre você! O que devemos saber? Conta um pouco!
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">
              Você entende que, ao entrar na Cyber, você terá responsabilidades,
              mas também diversão e uma nova família? Aqui nós damos o nosso
              melhor, não somos uma atlética comum. Todos tem deveres e
              benefícios por estar aqui! Esteja ciente de tudo isso!
            </label>
            <ToggleableOptions
              options={["Estou Ciente", "Não concordo com isso"]}
              currentValue=""
              onChange={(option) => console.log(option)}
            />
          </div>

          <button type="submit">Enviar</button>
          <p>Você receberá uma cópia por e-mail.</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Forms;
