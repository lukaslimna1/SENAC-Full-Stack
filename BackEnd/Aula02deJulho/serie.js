import filme from './filme.js';

export	class Serie extends filme {
    constructor(nome, nomeSerie, duracao, sinopse, ano, episodio, temporada){
        super(nome, duracao, sinopse, ano)

        this.nomeSerie = nomeSerie
        this.episodio = episodio
        this.temporada = temporada
    }

   
    compartilhar(){
        return `Estou assistindo o episodio ${this.episodio} da temporada ${this.temporada} da serie ${this.nomeSerie} que conta com a seguinte historia ${this.sinopse} foi lançado no ano ${this.ano}`
    }
    
}