import { Usuario } from './Usuario.js';
import { funcoesES } from './EntradaSaida.js';

const EntradaSaida = new funcoesES()


const usuarioJoao = new Usuario("joao", "joao@teste.com", "123");


var email = EntradaSaida.entrada("Digite um email")
var senha = EntradaSaida.entrada("Digite uma senha")

var resultado = usuarioJoao.fazerLogin(email,senha)

if (resultado == "Login efetuado"){
    EntradaSaida.mensagemCompleta("Bem vindo "+usuarioJoao.nome)
    do {
        EntradaSaida.mensagemCompleta("Deseja fazer o que?")
        var opcao = EntradaSaida.entrada("Digite uma opção(1 - adicionar assinatura / 2 - verificar assinatura / 0 - sair)")
        switch (opcao) {
            case '1':
                {
                    var dias = Number(EntradaSaida.entrada("Quantos dias adicionar?"))
                    usuarioJoao.adicionarAssinatura(dias)
                } 
            case '2':
                {
                    EntradaSaida.mensagemCompleta(usuarioJoao.validarAssinatura())
                } 
            case '0':
                EntradaSaida.mensagemCompleta("Obrigado e até mais.");              
            default:
                EntradaSaida.mensagemSimples("Digite uma opção válida");
        }
    }while (opcao != 0)
}