import { useState } from 'react';
import { BookOpen, Plus, Search, Filter, Ban, Check, Loader2, BookCopy, AlertCircle } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookForm from './components/BookForm';
import BookSearch from './components/BookSearch';
import StatsCard from './components/StatsCard';
import BookCard from './components/BookCard';
import EmptyState from './components/EmptyState';
import { useBooks } from './hooks/useBooks';
import './app.css';

function App() {
    const [activeTab, setActiveTab] = useState('acervo');
    const { books, stats, filter, setFilter, removeBook, loading, error } = useBooks();

    const tabs = [
        { id: 'acervo', label: 'Acervo', icon: <BookOpen size={18} /> },
        { id: 'adicionar', label: 'Adicionar', icon: <Plus size={18} /> },
        { id: 'buscar', label: 'Buscar', icon: <Search size={18} /> }
    ];

    return (
        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <header className="header">
                <div className="header-content">
                    <div className="header-logo_section">
                        <BookOpen size={32} className="header-logo_icon" />
                        <h1 className="header-title">Sistema de Biblioteca</h1>
                    </div>
                    <p className="header-subtitle">Gerencie seu acervo de livros de forma simples e eficiente</p>
                </div>
            </header>

            <section className="stats-section">
                <StatsCard
                    icon={<BookOpen size={24} />}
                    title="Total de Livros"
                    value={stats.total}
                    color="blue"
                />
                <StatsCard
                    icon={<Check size={24} />}
                    title="Disponíveis"
                    value={stats.available}
                    color="green"
                />
                <StatsCard
                    icon={<Ban size={24} />}
                    title="Emprestados"
                    value={stats.unavailable}
                    color="yellow"
                />
            </section>

            <nav className="tabs-navigation">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </nav>

            <main className="main-content">
                {activeTab === 'acervo' && (
                    <div className="acervo-section">
                        <div className="controls-bar">
                            <div className="filters">
                                <Filter size={18} />
                                <span>Filtros:</span>
                                <button
                                    onClick={() => setFilter('total')}
                                    className={`filter-btn ${filter === 'total' ? 'active' : ''}`}
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setFilter('available')}
                                    className={`filter-btn ${filter === 'available' ? 'active' : ''}`}
                                >
                                    Apenas Disponíveis
                                </button>
                                <button
                                    onClick={() => setFilter('unavailable')}
                                    className={`filter-btn ${filter === 'unavailable' ? 'active' : ''}`}
                                >
                                    Apenas Emprestados
                                </button>
                            </div>
                        </div>

                        <div className="books-content">
                            {loading && (
                                <div className="loading-state">
                                    <Loader2 size={32} className="loading-icon" />
                                    <p>Carregando livros...</p>
                                </div>
                            )}

                            {error && (
                                <div className="error-state">
                                    <AlertCircle size={32} className="error-icon" />
                                    <p>{error}</p>
                                </div>
                            )}

                            {!loading && !error && books.length === 0 && (
                                <EmptyState filter={filter} />
                            )}

                            {!loading && !error && books.length > 0 && (
                                <div className="books-grid">
                                    {books.map(book => (
                                        <BookCard
                                            key={book.code}
                                            book={book}
                                            onDelete={removeBook}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'adicionar' && (
                    <div className="form-section">
                        <h2><BookCopy /> Adicionar Novo Livro</h2>
                        <BookForm />
                    </div>
                )}

                {activeTab === 'buscar' && (
                    <div className="search-section">
                        <h2><Search /> Buscar Livros</h2>
                        <BookSearch onDelete={removeBook} />
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
