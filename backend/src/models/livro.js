export default class Livro {
    static nextId = 0;

    constructor(titulo, autor, anoPublicacao, disponibilidade) {
        this.codigo = Livro.nextId++;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponibilidade = disponibilidade
    }
}