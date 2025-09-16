function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      <div className="book-header">
        <h3 className="book-title">{book.title}</h3>
        <span className={`status-badge ${book.availability ? 'available' : 'unavailable'}`}>
          {book.availability ? 'Disponível' : 'Emprestado'}
        </span>
      </div>
      <p className="book-author"><strong>Autor:</strong> {book.author}</p>
      <p className="book-year"><strong>Ano:</strong> {book.yearPublication}</p>
      <button 
        onClick={() => onDelete(book.code)} 
        className="delete-btn"
      >
        Remover
      </button>
    </div>
  );
}

export default BookCard;