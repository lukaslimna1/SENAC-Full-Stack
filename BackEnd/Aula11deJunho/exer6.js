// Função que recebe o nome e a idade de uma pessoa e retorna se ela pode ou não entrar na festa
function verificaEntrada(nome, idade) {
    if (idade >= 18) {
        return `${nome} tem ${idade} anos e pode entrar na festa.`;
    } else {
        return `${nome} tem ${idade} anos e não pode entrar na festa.`;
    }
}

// Chamando a função com exemplo de entrada
let mensagem = verificaEntrada("Joao", 18);
console.log(mensagem);