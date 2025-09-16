import { useState } from "react";
import { saveBook } from "../services/BookService";
import { toast } from 'react-toastify';

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
            const created = await saveBook(bookData);
            toast.success(`Livro "${created?.title ?? bookData.title}" adicionado ao acervo!`);
            resetForm();
        } catch (error) {
            console.error('Erro ao salvar livro:', error);
            toast.error('Erro ao salvar livro. Tente novamente.');
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
