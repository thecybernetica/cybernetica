import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ToggleableOptions from "../../components/ToggleableOptions/ToggleableOptions";
import "./Forms.css";
import "../../styles/AppStyle.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instagram: "",
    academicEmail: "",
    ra: "",
    campus: "Asa Norte",
    course: "Ciência da Computação",
    semester: "Primeiro",
    interestsAndAvailability: "",
    previousExperience: "",
    participationInActivities: "SIM",
    eventOrganizationExperience: "",
    itSkills: "",
    desiredBoard: "E-Sports",
    reasonForJoining: "",
    openSpace: "",
    changesToCybernetica: "",
    aboutYourself: "",
    understandingResponsibilities: "Estou Ciente",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.academicEmail ||
      !formData.ra
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <Header />
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h1>Faça parte da cybernética</h1>
          <h3>Informações Pessoais</h3>
          <div>
            <label htmlFor="name">
              Qual seu nome, telefone e Instagram?{" "}
              <span className="required">*</span>
            </label>
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
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="space-divider" />
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="@fulano.silva"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">
              Qual o seu email academico e RA?{" "}
              <span className="required">*</span>
            </label>
            <div className="form-row">
              <input
                type="email"
                id="academicEmail"
                name="academicEmail"
                placeholder="email@sempreceub.com"
                value={formData.academicEmail}
                onChange={handleChange}
              />
              <div className="space-divider" />
              <input
                type="ra"
                id="ra"
                name="ra"
                placeholder="xxxxxxxx"
                value={formData.ra}
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Qual o seu campus?</label>
          <ToggleableOptions
            options={["Asa Norte", "Taguatinga"]}
            currentValue={formData.campus}
            onChange={(value) => handleOptionChange("campus", value)}
          />

          <label>Qual o seu curso e semestre?</label>
          <ToggleableOptions
            options={[
              "Ciência da Computação",
              "Análise e Desenvolvimento de Sistemas",
              "Ciência de Dados",
              "Cybersegurança",
            ]}
            currentValue={formData.course}
            onChange={(value) => handleOptionChange("course", value)}
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
            currentValue={formData.semester}
            onChange={(value) => handleOptionChange("semester", value)}
          />

          <h3>Experiências</h3>
          <div>
            <label htmlFor="interestsAndAvailability">
              Quais são seus interesses e a sua disponibilidade?
            </label>
            <textarea
              id="interestsAndAvailability"
              name="interestsAndAvailability"
              value={formData.interestsAndAvailability}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="previousExperience">
              Você já participou de alguma atlética ou projeto semelhante?
            </label>
            <textarea
              id="previousExperience"
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="participationInActivities">
              Está disposto(a) a participar de campanhas ou atividades de
              integração? Aqui todos nós ajudamos em todos os eventos, não
              importa a sua diretoria.
            </label>
            <ToggleableOptions
              options={["SIM", "NÃO"]}
              currentValue={formData.participationInActivities}
              onChange={(value) =>
                handleOptionChange("participationInActivities", value)
              }
            />
          </div>
          <div>
            <label htmlFor="eventOrganizationExperience">
              Tem experiência em organização de eventos ou competições? Se sim,
              discorra sobre.
            </label>
            <textarea
              id="eventOrganizationExperience"
              name="eventOrganizationExperience"
              value={formData.eventOrganizationExperience}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="itSkills">
              Possui habilidades relacionadas a TI que possam contribuir com a
              atlética? (Ex.: design, desenvolvimento de sistemas, marketing
              digital)
            </label>
            <textarea
              id="itSkills"
              name="itSkills"
              value={formData.itSkills}
              onChange={handleChange}
            />
          </div>

          <h3>Motivação</h3>

          <div>
            <label htmlFor="desiredBoard">
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
              currentValue={formData.desiredBoard}
              onChange={(value) => handleOptionChange("desiredBoard", value)}
            />
          </div>
          <div>
            <label htmlFor="reasonForJoining">
              Por que você quer entrar na Cybernética?
            </label>
            <textarea
              id="reasonForJoining"
              name="reasonForJoining"
              value={formData.reasonForJoining}
              onChange={handleChange}
            />
          </div>

          <h3>Entrevista</h3>
          <div>
            <label htmlFor="openSpace">Espaço Aberto</label>
            <textarea
              id="openSpace"
              name="openSpace"
              value={formData.openSpace}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="changesToCybernetica">
              O que você mudaria na cyber? Faça uma crítica, elogio, pode falar!
            </label>
            <textarea
              id="changesToCybernetica"
              name="changesToCybernetica"
              value={formData.changesToCybernetica}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="aboutYourself">
              Fale um pouco sobre você! O que devemos saber? Conta um pouco!
            </label>
            <textarea
              id="aboutYourself"
              name="aboutYourself"
              value={formData.aboutYourself}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="understandingResponsibilities">
              Você entende que, ao entrar na Cyber, você terá responsabilidades,
              mas também diversão e uma nova família? Aqui nós damos o nosso
              melhor, não somos uma atlética comum. Todos tem deveres e
              benefícios por estar aqui! Esteja ciente de tudo isso!
            </label>
            <ToggleableOptions
              options={["Estou Ciente", "Não concordo com isso"]}
              currentValue={formData.understandingResponsibilities}
              onChange={(value) =>
                handleOptionChange("understandingResponsibilities", value)
              }
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
