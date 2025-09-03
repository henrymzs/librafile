function EmptyState({ filter }) {
  const getMessage = () => {
    switch(filter) {
      case 'disponiveis':
        return 'Nenhum livro disponível no momento';
      case 'emprestados':
        return 'Nenhum livro emprestado no momento';
      default:
        return 'Nenhum livro encontrado';
    }
  };

  return (
    <div className="empty-state">
      <BookOpen size={64} className="empty-icon" />
      <h3>{getMessage()}</h3>
      <p>Todos os livros estão {filter === 'emprestados' ? 'disponíveis' : 'emprestados'} no momento.</p>
    </div>
  );
}

export default EmptyState;