import Book from '../models/Book.js';

let books = [];

export const bookRepository = {

    async findAllBooks() {
        return books;
    },

    async findById(id) {
        return books.find(book => book.code === id);
    },

    async availabilityBooks(booksAvailable) {
        const isAvailable = booksAvailable === 'true';
        const allBooks = await this.findAllBooks();
        return allBooks.filter(book => book.disponibilidade === isAvailable);
    },

    async save({ title, author, yearPublication, availability }) {
        const newBook = new Book(title, author, yearPublication, availability);
        books.push(newBook);
        return newBook;
    },

    async delete(id) {
        const bookToRemove = books.find(book => book.codigo === id);
        if (!bookToRemove) return null;
        books = books.filter(book => book.codigo !== id);
        return bookToRemove;
    },
};