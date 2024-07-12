/*Componentes*/
import Cabecalho from "../componentes/cabecalho"
import Quadrado from "../componentes/quadrado"
/*CSS */
import '../estilos/estilo.css'

function Home() {
    return (
        <div>
            <Cabecalho />
            <div>  
                Corpo da pagina Home
                <Quadrado />
                <br />
                
            </div>


        </div>
    )
}
export default Home