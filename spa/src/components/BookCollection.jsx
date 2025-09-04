import { useBooks } from "../hooks/useBooks";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";

function BookCollection() {
    const { books, removeBook } = useBooks();

    if (books.length === 0) {
        return <EmptyState />
    }

    return (
        <div className="card-apresentation">
            {books.map((book) => {
                <BookCard 
                    key={book.codigo}
                    book={book}
                    onDelete={removeBook}
                />
            })}
        </div>
    );
}

export default BookCollection;