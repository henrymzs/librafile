import { useBookSearch } from "../hooks/useBookSearch";
import BookCard from "./BookCard";

function BookSearch() {
    const { searchId, setSearchId, searchResult, searchError, buscarLivro } = useBookSearch();

    return (
        <div className="option-search">
            <div className="search-input_group">
                <input
                    className="input-search" 
                    type="text"
                    placeholder="Buscar livro..."
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)} 
                />
                <button onClick={buscarLivro}>Buscar</button>
            </div>
            {searchError && <p className="error">{searchError}</p>}

            {searchResult && (
                <div className="card-apresentation">
                    <BookCard book={searchResult} showDeleteButton={false} />
                </div>
            )}
        </div>
    );
}

export default BookSearch;