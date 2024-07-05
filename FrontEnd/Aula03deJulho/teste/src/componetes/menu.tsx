import { type } from "@testing-library/user-event/dist/type"


type Carro ={
    modelo: String
    ano: String
}

function Menus (valores:Carro) {


    return (
        <div>
            <li><a href="#">MENU</a></li>
        </div>
    )
    
}

export default Menus