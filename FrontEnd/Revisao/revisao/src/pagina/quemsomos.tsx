import { Link } from "react-router-dom"

/*Componentes*/
import Cabecalho from "../componentes/cabecalho"
/*CSS*/
import '../estilos/estilo.css'


function QuemSomos() {
    return (
        <div>
            <Cabecalho />
            <div>
                Quem Somos
            </div>
            <div className="qs_container">
            <Link to='/professores' className="professor">
            <div className="professor">Professores</div>
            </Link>
            <Link to='/alunos'className="alunos">
            <div className="alunos">Alunos</div>
            </Link>
            </div>
        </div>
    )
    
}

export default QuemSomos