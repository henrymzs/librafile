import { useState, useEffect } from 'react';
import { deleteBook, getAllBooks } from "../services/BookService.js";
import { toast } from 'react-toastify';

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
        const bookToRemove = books.find(book => book.code === id);
        const confirmDelete = window.confirm(
            `Tem certeza que deseja remover o livro "${bookToRemove?.title}"?`
        );
        if (!confirmDelete) return; 
        try {
            const toastId = toast.loading('Removendo livro...');
            await deleteBook(id);
            setBooks(prevBooks => {
                const newBooks = prevBooks.filter(book => book.code !== id);
                toast.update(toastId, {
                    render: `Livro "${bookToRemove?.title}" removido com sucesso!`,
                    type: "success",
                    isLoading: false,
                    autoClose: 3000
                });
                return newBooks;
            });
        } catch (err) {
            console.error('Erro ao excluir livro:', err);
            toast.error('Erro ao remover livro. Tente novamente.');
        }
    };

    const stats = {
        total: books.length,
        available: books.filter(book => book.availability).length,
        unavailable: books.filter(book => !book.availability).length
    };

    const applyFilters = () => {
        let filtered = [...books];
        if (filter === 'available') {
            filtered = filtered.filter(book => book.availability);
        } else if (filter === 'unavailable') {
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
