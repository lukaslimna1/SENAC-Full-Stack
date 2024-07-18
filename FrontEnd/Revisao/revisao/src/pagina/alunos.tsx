import { Link } from 'react-router-dom'
import Cabecalho from '../componentes/cabecalho'
import '../estilos/estilo.css'

function Alunos() {
    return (
        <div>
            <Cabecalho/>
            <Link to='/alunos/Paulo_Vinicius'>
            <div> Paulo Vinicius</div>
            </Link>
            <Link to='/alunos/Lucas_Lima'>
            <div> Lucas Lima </div>
            </Link>
            <Link to='/alunos/Gustavo_Castro'>
            <div> Gustavo Castro</div>
            </Link>
            <Link to='/alunos/Ana_Flavia'>
            <div> Ana Flavia</div>
            </Link>
        </div>
    )
    
    
}
export default Alunos