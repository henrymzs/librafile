import Book from '../models/Book.js';
import { writeFileSync } from 'fs';
import path from 'path';

let books = [];
const booksPath = path.resolve("./Books.json");

export const bookRepository = {
    async findById(id) {
        return books.find(book => book.codigo === id);
    },

    async delete(id) {
        const bookToRemove = books.find(book => book.codigo === id);
        if (!bookToRemove) {
            return null;
        }
        books = books.filter(book => book.codigo !== id);
        writeFileSync(booksPath, JSON.stringify(books, null, 2), 'utf-8');
        return bookToRemove;
    },

    async findAllBooks() {
        return books;
    },

    async availabilityBooks(booksAvailable) {
        const allBooks = await this.findAllBooks();
        return allBooks.filter(book => String(book.disponibilidade) === booksAvailable);
    },

    async save({ titulo, autor, anoPublicacao, disponibilidade }) {
        const newBook = new Book(titulo, autor, anoPublicacao, disponibilidade);
        books.push(newBook);
        writeFileSync(booksPath, JSON.stringify(books, null, 2), 'utf-8');

        return newBook;
    }
};