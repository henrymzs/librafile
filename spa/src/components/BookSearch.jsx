import { useBookSearch } from "../hooks/useBookSearch";
import BookCard from "./BookCard";

function BookSearch({ onDelete }) {
    const { searchId, setSearchId, searchResult, searchError, getBook } = useBookSearch();

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
                <button onClick={getBook}>Buscar</button>
            </div>
            {searchError && <p className="error">{searchError}</p>}

            {searchResult && (
                <div className="card-apresentation">
                    <BookCard book={searchResult} onDelete={onDelete} />
                </div>
            )}
        </div>
    );
}

export default BookSearch;