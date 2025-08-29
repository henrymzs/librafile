export default class Book {
    static nextId = 1;

    constructor(titulo, autor, anoPublicacao, disponibilidade) {
        this.codigo = Book.nextId++;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponibilidade = disponibilidade
    }
}