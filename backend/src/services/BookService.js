import { bookRepository } from "../repositories/BookRepository.js";
import { validateId, getBookDefault } from "../utils/utils.js";

export const bookService = {
    async getAllBooks() {
        const books = await bookRepository.findAllBooks();
        getBookDefault(books);
        return books;
    },

    async getBookById(id) {
        validateId(id);
        const book = await bookRepository.findById(id);
        getBookDefault(book);
        return book;
    },

    async deleteBook(id) {
        validateId(id);
        const book = await bookRepository.delete(id);
        getBookDefault(book);
        return book;
    },

    async availableBooks(booksAvailable) {
        if (booksAvailable !== 'true' && booksAvailable !== 'false') {
            throw new Error('Disponibilidade deve ser "true" ou "false"');
        }
        const books = await bookRepository.availabilityBooks(booksAvailable);
        getBookDefault(books);
        return books;
    },

    async createBook(newBook) {
        if (!newBook.title || !newBook.author || !newBook.yearPublication) {
            throw new Error('Dados do livro incompletos. Título, autor e ano de publicação são obrigatórios.');
        }

        if (typeof newBook.title !== 'string') {
            throw new Error('Título do livro não pode ser número e nem caractere especial.');
        }

        if (typeof newBook.author !== 'string') {
            throw new Error('Autor do livro não pode ser número e nem caractere especial.');
        }

        if (typeof newBook.availability !== 'boolean') {
            throw new Error('Disponibilidade do livro deve ser "true(Disponivel)" ou "false(Indisponivel)".');
        }

        const allBooks = await bookRepository.findAllBooks();

        const exists = allBooks.some(
            (bookTemp) =>   bookTemp.title.toLowerCase() === newBook.title.toLowerCase() &&
                            bookTemp.author.toLowerCase() === newBook.author.toLowerCase()
        );
        if (exists) {
            throw new Error('Já existe um livro com esse título e autor.');
        }
        const newBookFormate = {
            ...newBook,
            yearPublication: Number(newBook.yearPublication)
        };

        if (isNaN(newBookFormate.yearPublication)) {
            throw new Error('Ano de Publicação inválido');
        }
        return await bookRepository.save(newBookFormate);
    },
}