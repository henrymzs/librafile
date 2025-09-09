import { bookService } from "../services/BookService.js";

export const bookController = {

    async searchAllBooks(req, res) {
        try {
            const books = await bookService.getAllBooks();
            return res.json({ message: 'Livro do acervo ', books});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async getBook(req, res) {
        try {
            const id = Number(req.params.id);
            const book = await bookService.getBookById(id);
            return res.json({ message: 'Livro Encontrado ', book});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async getAvailableBooks(req, res) {
        try {
            const booksAvailable = req.params.availability.toLowerCase();
            const books = await bookService.availableBooks(booksAvailable);
            return res.json({ message: 'Livro Encontrado ', books});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    
    async createBook(req, res) {
        try {
            const response = req.body;
            const book = await bookService.createBook(response);
            return res.status(201).json({ message: 'Livro Adicionado com sucesso!', book });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async deleteBook(req, res) {
        try {
            const id = Number(req.params.id);
            const book = await bookService.deleteBook(id);
            return res.status(200).json({ message: `Livro com ID ${id} removido com sucesso!`, book });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
}