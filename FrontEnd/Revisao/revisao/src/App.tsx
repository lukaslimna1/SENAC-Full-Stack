/*React*/
import {Routes, Route} from 'react-router-dom'
/*Paginas*/
import Home from './pagina/home';
import QuemSomos from './pagina/quemsomos';

/*CSS*/
import './estilos/estilo.css';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/quemsomos' element={<QuemSomos/>} />
      </Routes>
    </div>
  );
}

export default App;