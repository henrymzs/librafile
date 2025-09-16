import { BookOpen } from 'lucide-react';

function EmptyState({ filter }) {
  const getMessage = () => {
    switch (filter) {
      case 'available':
        return 'Nenhum livro disponível no momento';
      case 'unavailable':
        return 'Nenhum livro emprestado no momento';
      default:
        return 'Nenhum livro encontrado';
    }
  };

  const getDescription = () => {
    switch (filter) {
      case 'available':
        return 'Todos os livros estão emprestados no momento.';
      case 'unavailable':
        return 'Todos os livros estão disponíveis no momento.';
      default:
        return 'Comece adicionando alguns livros ao seu acervo.';
    }
  };

  return (
    <div className="empty-state">
      <BookOpen size={64} className="empty-icon" />
      <h3>{getMessage()}</h3>
      <p>{getDescription()}</p>
    </div>
  );

}

export default EmptyState;