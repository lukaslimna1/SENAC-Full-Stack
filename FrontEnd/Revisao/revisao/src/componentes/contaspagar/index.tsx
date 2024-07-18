
type Props = {
    Descricao: String
    Valor: String
    Vencimento:String
}

function ContasPagar(valores:Props) {
return (
    <div>
        Lista de Contas a Pagar
        <hr />
        A descrição da conta é : {valores.Descricao}
        <br />
        O Vencimento da conta é: {valores.Vencimento}
        <br />
        O valor da conta é: {valores.Valor}
        
    </div>
)    
}

export default ContasPagar