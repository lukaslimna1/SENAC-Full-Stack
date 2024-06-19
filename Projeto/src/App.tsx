import React from 'react';
import Home from "./paginas/Home/home";
import Cabecalho from './componentes/Cabecalho/cabecalho';
import Rodape from './componentes/Rodape/rodape';
import CabecalhoComum from './componentes/Cabecalho/cabecalhocomum';

function App() {
  return (
    <div className="App">
      <CabecalhoComum/>
      <Cabecalho/>
      <Home/>
      <Rodape/>
    </div>
  );
}

export default App;
