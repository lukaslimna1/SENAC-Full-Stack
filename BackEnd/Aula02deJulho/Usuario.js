import { Datas } from "./datas.js";

export class Usuario{
    #senha
    constructor (nome,email,senha){
        // this.datas = new (require('./datas.js'))()
        this.datas = new Datas();

        this.nome = nome;
        this.email = email;
        this.#senha = senha;
        this.assinatura = this.datas.dataAtual();
    }
    validarAssinatura(){
        return "Voce tem "+this.datas.diferencaDias(this.assinatura)+" dias de assinatura"
    }
    retornaAssinatura(){
        return this.datas.formataData(this.assinatura)
    }
    adicionarAssinatura(dias){
        this.assinatura = this.datas.adicionarDias(this.assinatura,dias);
    }

    fazerLogin(email, senha){
        if(email == this.email){
            if(senha == this.#senha){
                return "Login efetuado"
            }else{
                return "Senha incorreta"
            }
        }else{
            return "email invalido"
        }
    }

}