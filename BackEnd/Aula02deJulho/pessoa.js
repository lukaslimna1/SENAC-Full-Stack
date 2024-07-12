export class Pessoa {
    #anoNascimento
    constructor(nome,anoNascimento,nascionalidade){
        this.nome = nome
        this.#anoNascimento = anoNascimento
        this.nascionalidade = nascionalidade
    }

    get Idade(){
        return 2024 - this.#anoNascimento
    }


}

