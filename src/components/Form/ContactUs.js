import emailjs from "emailjs-com";
import React from "react";
import "../Form/Form.css";
import { API_KEY, TEMPLATE_KEY, EMAIL } from "./API";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(`${EMAIL}`, `${TEMPLATE_KEY}`, e.target, `${API_KEY}`)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label className="inputfz">Nome</label>
      <input
        placeholder="Insira seu nome"
        className="input sharedStyles"
        name="name"
      />
      <label className="inputfz">Assunto</label>
      <input
        placeholder="Insira o assunto"
        className="input sharedStyles"
        name="subject"
      />
      <label className="inputfz">
        Número<span> (Opcional)</span>
      </label>
      <input
        placeholder="(XX)XXXXXXXXX"
        className="input sharedStyles"
        type="text"
        name="number"
      />
      <label className="inputfz">Email</label>
      <input
        placeholder="Insira seu email"
        className="input sharedStyles"
        type="email"
        name="email"
      />
      <label className="inputfz">Mensagem</label>
      <textarea
        className="textarea"
        placeholder="Insira sua mensagem"
        className="textarea"
        name="message"
      />
      <div className="inputfz botao">
        <button className="inputButton" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}
