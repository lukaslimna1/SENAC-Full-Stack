import React from "react";
import "../Estilos/estilo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'; // Utilizando um ícone de seta para a direita

function CabecalhoComum() {
  return (
    <header className="cabecalho-comum">
      <div className="logo">
        <a href="/">
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" />
        </a>
      </div>
      <nav className="nav-links">
        <a href="./vagas">VAGAS</a>
        <a href="./guia">GUIA</a>
        <a href="./empresas">PARA EMPRESAS</a>
        <a href="./candidatos">PARA CANDIDATOS</a>
        <a href="./quemsomos">QUEM SOMOS</a>
      </nav>
      <div className="login-cadastro">
        <div className="icon-user">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="icon" />
        </div>
      </div>
    </header>
  );
}

export default CabecalhoComum;

