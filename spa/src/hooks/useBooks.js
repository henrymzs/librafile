import { useState, useEffect } from 'react';
import { deleteBook, getAllBooks } from "../services/BookService.js";

export function useBooks() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('todos');

    const loadBooks = async () => {
        try {
            setLoading(true);
            const data = await getAllBooks();
            setBooks(data);
            setError(null);
        } catch (err) {
            console.error('Erro ao carregar livros:', err);
            setError('Erro ao carregar livros');
        } finally {
            setLoading(false);
        }
    };

    const removeBook = async (id) => {
        try {
            await deleteBook(id);
            setBooks(prevBooks => prevBooks.filter(book => book.codigo !== id));
        } catch (err) {
            console.error('Erro ao excluir livro:', err);
            setError('Erro ao excluir livro');
        }
    };

    const stats = {
        total: books.length,
        disponiveis: books.filter(book => book.disponibilidade).length,
        emprestados: books.filter(book => !book.disponibilidade).length
    };

    const applyFilters = () => {
        let filtered = [...books];
        if (filter === 'disponiveis') {
            filtered = filtered.filter(book => book.disponibilidade);
        } else if (filter === 'emprestados') {
            filtered = filtered.filter(book => !book.disponibilidade);
        }
        setFilteredBooks(filtered);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [books, filter]);

    return {
        books: filteredBooks,
        loading,
        error,
        stats,
        filter,
        setFilter,
        removeBook,
        loadBooks
    };
}
