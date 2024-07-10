import './estilos/estilo.css';
import Home from './pagina/home';
import QuemSomos from './pagina/quemsomos';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Route>
      <QuemSomos />
      </Route>
    </div>
  );
}

export default App;
