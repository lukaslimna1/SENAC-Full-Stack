import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Detalhe from './pagina/Detalhes';
import Home from './pagina/Home';
import Detalhes from './pagina/Detalhes';

function App() {
  return (
    <div className="App">
      <Routes>
      < Route path="/" element={<Home/>} />
      < Route path='/detalhes/:teste' element={<Detalhes/>}/>
      </Routes>
    </div>
  );
}

export default App;
