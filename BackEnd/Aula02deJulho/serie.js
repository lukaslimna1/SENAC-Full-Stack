import Filme from "./filme.js"; // Importando a classe Filme

export default class Serie extends Filme {
  constructor(nome, duracao, sinopse, ano, nomeSerie, episodio, temporada) {
    super(nome, duracao, sinopse, ano);
    this.nomeSerie = nomeSerie;
    this.episodio = episodio;
    this.temporada = temporada;
  }

  assistir() {
    return `Assistindo à série ${this.nomeSerie}, temporada ${this.temporada}, episódio ${this.episodio}. Tempo restante -> ${this.duracao} minutos`;
  }

  compartilhar() {
    return `Estou assistindo à série ${this.nomeSerie}, temporada ${this.temporada}. Sinopse: ${this.sinopse}. Foi lançada em ${this.ano}.`;
  }
}
