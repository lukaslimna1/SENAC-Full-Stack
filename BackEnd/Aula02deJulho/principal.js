import { Usuario } from './Usuario.js';
import { funcoesES } from './EntradaSaida.js';
import filme from './filme.js';
import { Serie } from './serie.js';
import { Pessoa } from './pessoa.js';

const EntradaSaida = new funcoesES()

const ator1 = new Pessoa('Lucas', 1994 , 'Brasileiro')
EntradaSaida.mensagemCompleta(`Ator -- nome ${ator1.nome} nacionalidade ${ator1.nascionalidade} idade ${ator1.Idade}`)

// const usuarioJoao = new Usuario("joao", "joao@teste.com", "123");


// var email = EntradaSaida.entrada("Digite um email")
// var senha = EntradaSaida.entrada("Digite uma senha")

// var resultado = usuarioJoao.fazerLogin(email,senha)
// const filme1 = new filme('Divertidamente 2', 120 , "um Filme sobre a mente", 2024);
// const serie1 = new Serie('The Boys', 'The Boys', 60, "Serie sangrenta", 2020, 1, 1);



// EntradaSaida.mensagemCompleta (filme1.assistir());
// EntradaSaida.mensagemCompleta (serie1.assistir());




// if (resultado == "Login efetuado"){
//     EntradaSaida.mensagemCompleta("Bem vindo "+usuarioJoao.nome)
//     do {
//         EntradaSaida.mensagemCompleta("Deseja fazer o que?")
//         var opcao = EntradaSaida.entrada("Digite uma opção(1 - adicionar assinatura / 2 - verificar assinatura / 0 - sair)")
//         switch (opcao) {
//             case '1':
//                 {
//                     var dias = Number(EntradaSaida.entrada("Quantos dias adicionar?"))
//                     usuarioJoao.adicionarAssinatura(dias)
//                 } 
//             case '2':
//                 {
//                     EntradaSaida.mensagemCompleta(usuarioJoao.validarAssinatura())
//                 } 
//             case '0':
//                 EntradaSaida.mensagemCompleta("Obrigado e até mais.");              
//             default:
//                 EntradaSaida.mensagemSimples("Digite uma opção válida");
//         }
//     }while (opcao != 0)
// }