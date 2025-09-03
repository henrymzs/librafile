import { useState } from "react";
import { getBookID } from "../services/BookService";

export function useBookSearch() {
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchError, setSearchError] = useState('');

    const buscarLivro = async () => {
        if (!searchId.trim()) return;

        try {
            const livro = await getBookID(searchId);
            setSearchResult(livro);
            setSearchError('');
        } catch (error) {
            setSearchResult(null);
            setSearchError('Livro não encontrado');
        }
    };

    const clearSearch = () => {
        setSearchId('');
        setSearchResult(null);
        setSearchError('');
    };

    return {
        searchId,
        setSearchId,
        searchResult,
        searchError,
        buscarLivro,
        clearSearch
    };
}