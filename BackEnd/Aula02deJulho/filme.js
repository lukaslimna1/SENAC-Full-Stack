export default class filme {
    constructor (nome, duracao, sinopse, ano) {
        this.nome = nome
        this.duracao = duracao
        this.sinopse = sinopse
        this.ano = ano
    }

    compartilhar(){
        return `Estou assistindo o filme ${this.name} que conta a seguinte historia ${this.sinopse}. Foi lançado em ${this.ano} e tem duração de ${this.duracao} minutos `
    }

    assistir(){
        return `Assistindo o filme ${this.nome} Tempo restante -> ${this.duracao} minutos`
    }



}


