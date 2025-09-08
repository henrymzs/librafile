import { bookRepository } from "../repositories/BookRepository.js";
import { validateId } from "../utils/utils.js";

export const bookService = {
    async getAllBooks() {
        const books = await bookRepository.findAllBooks();
        if (!books || books.length === 0) {
            throw new Error('Nenhum livro cadastrado');
        }
        
        return books;
    },

    async getBookById(id) {
        validateId(id);
        /**
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        */
        const book = await bookRepository.findById(id);
        if (!book) {
            throw new Error('Livro não encontrado');
        }
        return book;
    },

    async deleteBook(id) {
        validateId(id);
        /**
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        */
        const book = await bookRepository.delete(id);
        if (!book) {
            throw new Error('Livro não encontrado');
        }
        return book;
    },

    async availableBooks(booksAvailable) {
        if (booksAvailable !== 'true' && booksAvailable !== 'false') {
            throw new Error('Disponibilidade deve ser "true" ou "false"');
        }
        const books = await bookRepository.availabilityBooks(booksAvailable);
        if (!books || books.length === 0) {
            throw new Error('Nenhum livro econtrado.');
        }
        return books;
    },

    async createBook(newBook) {
        if (!newBook.titulo || !newBook.autor || !newBook.anoPublicacao) {
            throw new Error('Dados do livro incompletos. Título, autor e ano de publicação são obrigatórios.');
        }

        if (typeof newBook.titulo !== 'string') {
            throw new Error('Título do livro não pode ser número e nem caractere especial.');
        }

        if (typeof newBook.autor !== 'string') {
            throw new Error('Autor do livro não pode ser número e nem caractere especial.');
        }

        if (typeof newBook.disponibilidade !== 'boolean') {
            throw new Error('Disponibilidade do livro só pode ser "Disponivel" ou "Indisponivel".');
        }

        if (newBook.titulo.trim().toLowerCase() === newBook.autor.trim().toLowerCase()) {
            throw new Error('Titulo e autor não podem ser iguais.');
        }

        const allBooks = await bookRepository.findAllBooks();

        const exists = allBooks.some(
            (bookTemp) => bookTemp.titulo.toLowerCase() === newBook.titulo.toLowerCase() &&
                book.autorTemp.toLowerCase() === newBook.autor.toLowerCase()
        );
        if (exists) {
            throw new Error('Já existe um livro com esse título e autor.');
        }
        const newBookFormate = {
            ...newBook,
            anoPublicacao: Number(newBook.anoPublicacao)
        };

        if (isNaN(newBookFormate.anoPublicacao)) {
            throw new Error('Ano de Publicação inválido');
        }
        return await bookRepository.save(newBookFormate);
    },
}