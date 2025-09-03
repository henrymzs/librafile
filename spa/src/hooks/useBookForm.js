import { useState } from "react";
import { saveBook } from "../services/BookService";

export function useBookForm() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [anoPublicacao, setAnoPublicacao] = useState(''); 
    const [disponibilidade, setDisponibilidade] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const resetForm = () => {
        setTitulo('');
        setAutor('');
        setAnoPublicacao(''); 
        setDisponibilidade('');
        setMensagemSucesso('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); 
        setMensagemSucesso(''); 

        if (!titulo.trim() || !autor.trim() || !anoPublicacao || !disponibilidade) {
            setError('Por favor, preencha todos os campos');
            setLoading(false);
            return;
        }

        const livro = {
            titulo: titulo.trim(), 
            autor: autor.trim(), 
            anoPublicacao: Number(anoPublicacao),
            disponibilidade: disponibilidade === 'true' 
        };

        try {
            const result = await saveBook(livro);
            setMensagemSucesso(`${result.message} Título: "${result.book.titulo}"`);
            resetForm();
        } catch (error) {
            console.error('Erro ao salvar livro:', error);
            setError('Erro ao salvar livro. Tente novamente.'); 
        } finally {
            setLoading(false); 
        }
    };

    return {
        formData: { titulo, autor, anoPublicacao, disponibilidade }, 
        setters: { setTitulo, setAutor, setAnoPublicacao, setDisponibilidade },
        mensagemSucesso,
        error, 
        loading, 
        handleSubmit,
        resetForm
    };
}