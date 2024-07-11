/*CSS */
import '../../estilos/estilo.css'
import { Link } from 'react-router-dom'


function Cabecalho() {
    return (
        <div>
            <div className='cab_principal'>
            <Link className='link-menu' to='/'> <div className='cab_menu'>HOME</div></Link>
            <Link  className='link-menu' to='/quemsomos'> <div className='cab_menu'>Quem Somos</div>
                </Link>
            </div>

        </div>
    )
    
}

export default Cabecalho