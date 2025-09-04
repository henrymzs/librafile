function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      <div className="book-header">
        <h3 className="book-title">{book.titulo}</h3>
        <span className={`status-badge ${book.disponibilidade ? 'available' : 'unavailable'}`}>
          {book.disponibilidade ? 'Disponível' : 'Indisponivel'}
        </span>
      </div>
      <p className="book-author"><strong>Autor:</strong> {book.autor}</p>
      <p className="book-year"><strong>Ano:</strong> {book.anoPublicacao}</p>
      <button 
        onClick={() => onDelete(book.codigo)} 
        className="delete-btn"
      >
        Remover
      </button>
    </div>
  );
}

export default BookCard;