import filme from "./filme";

export	class Serie extends filme {
    constructor(nome, nomeSerie, duracao, sinopse, ano, episodio, temporada){
        super(nome, duracao, sinopse, ano)

        this.nomeSerie = nomeSerie
        this.episodio = episodio
        this.temporada = temporada
    }

   
    
}