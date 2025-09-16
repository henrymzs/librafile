import { useState } from "react";
import { saveBook } from "../services/BookService";

export function useBookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [yearPublication, setYearPublication] = useState('');
    const [availability, setAvailability] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setYearPublication('');
        setAvailability('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!title.trim() || !author.trim() || !yearPublication || availability === '') {
            setError('Por favor, preencha todos os campos');
            setLoading(false);
            return;
        }

        const bookData = {
            title: title.trim(),
            author: author.trim(),
            yearPublication: Number(yearPublication),
            availability: availability === 'true'
        };

        try {
            await saveBook(bookData);
            resetForm();
        } catch (error) {
            console.error('Erro ao salvar livro:', error);
            setError('Erro ao salvar livro. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return {
        formData: { title, author, yearPublication, availability },
        setters: { setTitle, setAuthor, setYearPublication, setAvailability },
        error,
        loading,
        handleSubmit,
        resetForm
    };
}
