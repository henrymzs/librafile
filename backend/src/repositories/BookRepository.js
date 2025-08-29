import Book from '../models/Book.js';
import { writeFileSync } from 'fs';
import path from 'path';

let books = [];
const booksPath = path.resolve("./Bookss.json");

export const bookRepository = {
    async findById(id) {
        return books.find(book => book.codigo === id);
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
        writeFileSync(booksPath, JSON.stringify(books, null, 2));

        return newBook;
    }
};
/** 
async function getLivroRepository(id) {
    return new Promise((resolve, reject) => {
        return resolve(livros.find(l => l.codigo === id));
    })
}

async function getLivrosRepository() {
    return new Promise((resolve, reject) => {
        return resolve(livros);
    })
}

async function postLivroRepository({ titulo, autor, anoPublicacao }) {
    return new Promise((resolve, reject) => {
        const novoLivro = new Livros(titulo, autor, anoPublicacao, true);
        livros.push(novoLivro);
        return resolve(novoLivro);
    });
}

async function updateLivroRepository(id, newLivro) {
    return new Promise((resolve, reject) => {
        const index = livros.findIndex(l => l.codigo === id);
        if (index >= 0) {
            if (newLivro.titulo && livros[index].titulo !== newLivro.titulo) {
                livros[index].titulo = newLivro.titulo;
            }
            if (newLivro.autor && livros[index].autor !== newLivro.autor) {
                livros[index].autor = newLivro.autor
            }
            if (newLivro.anoPublicacao && livros[index].anoPublicacao !== newLivro.anoPublicacao) {
                livros[index].anoPublicacao = newLivro.anoPublicacao;
            }
            if (newLivro.disponibilidade !== undefined && livros[index].disponibilidade !== newLivro.disponibilidade) {
                livros[index].disponibilidade = newLivro.disponibilidade;
            }

            return resolve(livros[index]);
        }
        return reject(new Error('Livro não encontrado'));
    });
}

async function deleteLivroRepository(id) {
    return new Promise((resolve, reject) => {
        const index = livros.findIndex(l => l.codigo === id);
        if (index >= 0) {
            livros.splice(index, 1);
            return resolve(true);
        }
        return reject(false);
    });
}


export default {
    
    getLivrosRepository,
    postLivroRepository,
    updateLivroRepository,
    deleteLivroRepository
}
*/