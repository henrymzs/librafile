export default class Livros {
    static nextId = 0;

    constructor(titulo, autor, anoPublicacao, disponibilidade) {
        this.codigo = Livros.nextId++;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponibilidade = disponibilidade
    }
}