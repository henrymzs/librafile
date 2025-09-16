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
            const response = await getAllBooks();
            const booksArray = response.books || response || [];
            setBooks(booksArray);
            setError(null);
        } catch (err) {
            console.error('Erro ao carregar livros:', err);
            setError('Erro ao carregar livros');
            setBooks([]); 
        } finally {
            setLoading(false);
        }
    };

    const removeBook = async (id) => {
        console.log('Tentando remover livro com ID:', id); 
        try {
            await deleteBook(id);
            setBooks(prevBooks => {
                const newBooks = prevBooks.filter(book => book.code !== id);
                console.log('Books após remoção:', newBooks);
                return newBooks;
            });
        } catch (err) {
            console.error('Erro ao excluir livro:', err);
            setError('Erro ao excluir livro');
        }
    };

    const stats = {
        total: books.length,
        disponiveis: books.filter(book => book.availability).length,
        emprestados: books.filter(book => !book.availability).length
    };

    const applyFilters = () => {
        let filtered = [...books];
        if (filter === 'disponiveis') {
            filtered = filtered.filter(book => book.availability);
        } else if (filter === 'emprestados') {
            filtered = filtered.filter(book => !book.availability);
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
