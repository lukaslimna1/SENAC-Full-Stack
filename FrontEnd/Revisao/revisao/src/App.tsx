/*React*/
import {Routes, Route} from 'react-router-dom'
/*Paginas*/
import Home from './pagina/home';
import QuemSomos from './pagina/quemsomos';
import Professores from './pagina/professores';
import Alunos from './pagina/alunos';

/*CSS*/
import './estilos/estilo.css';
import AlunoDetalhe from './pagina/alunoDetalhe';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/quemsomos' element={<QuemSomos/>} />
      <Route path='/professores' element={<Professores/>} />
      <Route path='/alunos' element={<Alunos/>} />
      <Route path='/alunos/:aluno' element={<AlunoDetalhe/>} />
      </Routes>
    </div>
  );
}

export default App;