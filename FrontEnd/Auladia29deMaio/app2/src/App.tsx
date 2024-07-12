import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">

        <a href="#home" className="navbar-brand"><img src={`${process.env.PUBLIC_URL}/Logo-Vetor-01.png`} alt="Logo" className="logo" /></a>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#vagas" className="nav-link">Vagas</a>
          </li>
          <li className="nav-item">
            <a href="#carreiras" className="nav-link">Carreiras</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#por-que-nos" className="nav-link">Por que Nós?</a>
            <div className="dropdown-menu">
              <a href="#para-empresa" className="dropdown-item">Para Empresa</a>
              <a href="#para-candidatos" className="dropdown-item">Para Candidatos</a>
              <a href="#quem-somos" className="dropdown-item">Quem Somos</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
