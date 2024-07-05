import Menus from "../componetes/menu"
import {useParams} from 'react-router-dom'

function Detalhes () {

    const Parametros = useParams();

    return (
        <div>
            <Menus ano="2000" modelo= 'SUV'/>
            asasas
            {Parametros.teste}


        </div>
    )
    
}
export default Detalhes
