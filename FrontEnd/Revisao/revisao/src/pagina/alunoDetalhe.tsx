import { useParams } from "react-router-dom"
import Cabecalho from "../componentes/cabecalho"
import ContasPagar from "../componentes/contaspagar"

function AlunoDetalhe() {
    const parametros = useParams()
    return (
        <div>
            <Cabecalho/>
            Esta pagina é o detalhe do aluno: {parametros.aluno}
            <hr />
            <h3>Contas a pagar</h3>
            <ContasPagar Descricao='Conta de Agua' Vencimento='15/07/2024' Valor='R$35,00' />
        </div>
    )
    
}
export default AlunoDetalhe