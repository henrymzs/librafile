import { useState } from "react";
import { getBookID } from "../services/BookService";

export function useBookSearch() {
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchError, setSearchError] = useState('');

    const getBook = async () => {
        if (!searchId.trim()) return;

        const idNum = Number(searchId);
        if (isNaN(idNum) || idNum <= 0) {
            setSearchResult(null);
            setSearchError('ID deve ser um número válido maior que zero');
            return;
        }

        try {
            const livro = await getBookID(idNum);
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
        getBook: getBook,
        clearSearch
    };
}
