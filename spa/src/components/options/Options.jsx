import "./option.css";
import { deleteBook, getAllBooks, getBookID, saveBook } from "../../services/BookService.js";
import { useState, useEffect } from 'react';


function Options() {
    const [activeOption, setActiveOption] = useState("acervo");
    const [books, setBooks] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [searchError, setSearchError] = useState("");
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState("");
    const [disponibilidade, setDisponibilidade] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const livro = {
            titulo,
            autor,
            anoPublicacao: Number(anoPublicacao),
            disponibilidade: disponibilidade.toLowerCase() === "true"
        };

        try {
            const result = await saveBook(livro);
            setMensagemSucesso(`${result.message} Título: "${result.book.titulo}"`);

            setTitulo("");
            setAutor("");
            setAnoPublicacao("");
            setDisponibilidade("");
        } catch (error) {
            console.error("Erro ao salvar livro:", error);
            setMensagemSucesso("");
        }
    }

    async function buscarLivro() {
        try {
            const livro = await getBookID(searchId);
            setSearchResult(livro);
        } catch (error) {
            setSearchResult(null);
            setSearchError("Livro não encontrado");
        }
    }

    async function excluirCard(id) {
        deleteBook(id)
            .then(() => {
                setBooks(prevBooks => prevBooks.filter(book => book.codigo !== id));
            })
            .catch(err => console.error('Erro ao excluir livro:', err));
    }

    useEffect(() => {
        getAllBooks()
            .then(data => setBooks(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div className="switch-options">
                <div className="options">
                    <button onClick={() => setActiveOption("acervo")}>Acervo</button>
                    <button onClick={() => setActiveOption("adicionar")}>Adicionar</button>
                    <button onClick={() => setActiveOption("buscar")}>Buscar</button>
                </div>
            </div>

            <div className="option-content">
                {activeOption === "acervo" && (
                    books.length === 0 ? (
                        <div className="acervo-info">
                            <img src="../../../public/open-book.png" alt="Imagem de um livro aberto" />
                            <span>Nenhum livro encontrado</span>
                            <span>Comece adicionando livros</span>
                        </div>
                    ) : (
                        <div className="card-apresentation">
                            {books.map((book) => (
                                <div className="book-card" key={book.codigo}>
                                    <div className="book-header">
                                        <h2>{book.titulo}</h2>
                                        <span className={`status ${book.disponibilidade ? 'available' : 'unavailable'}`}>
                                            {book.disponibilidade ? 'Disponível' : 'Indisponível'}
                                        </span>
                                    </div>
                                    <p><strong>Autor:</strong> {book.autor}</p>
                                    <p><strong>Ano:</strong> {book.anoPublicacao}</p>
                                    <button onClick={() => excluirCard(book.codigo)} className="excluir">Excluir</button>
                                </div>
                            ))}
                        </div>
                    )
                )}


                {activeOption === "adicionar" && (
                    <form className="form-add" onSubmit={handleSubmit}>
                        <h3>Adicione Livros</h3>
                        <div className="form-inputs">
                            <input
                                type="text"
                                placeholder="Título do livro"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Autor"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Ano Publicação"
                                value={anoPublicacao}
                                onChange={(e) => setAnoPublicacao(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Disponibilidade (true/false)"
                                value={disponibilidade}
                                onChange={(e) => setDisponibilidade(e.target.value)}
                            />
                        </div>

                        <button type="submit">Salvar</button>
                        {mensagemSucesso && (
                            <p className="mensagem-sucesso">{mensagemSucesso}</p>
                        )}
                    </form>
                )}

                {activeOption === "buscar" && (
                    <div className="option-search">
                        <h3>Buscar por Código</h3>
                        <input
                            className="input-search"
                            type="text"
                            placeholder="Buscar livro..."
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                        />
                        <button onClick={buscarLivro}>Buscar</button>

                        {searchError && <p className="error">{searchError}</p>}

                        {searchResult && (
                            <div className="card-apresentation">
                                {searchResult ? (
                                    <div className="book-card" key={searchResult.codigo}>
                                        <div className="book-header">
                                            <h2>{searchResult.titulo}</h2>
                                            <span className={`status ${searchResult.disponibilidade ? 'available' : 'unavailable'}`}>
                                                {searchResult.disponibilidade ? 'Disponível' : 'Indisponível'}
                                            </span>
                                        </div>
                                        <p><strong>Autor:</strong> {searchResult.autor}</p>
                                        <p><strong>Ano:</strong> {searchResult.anoPublicacao}</p>
                                    </div>
                                ) : (
                                    <p>Nenhum livro encontrado</p>
                                )}
                            </div>

                        )}
                    </div>
                )}


            </div>
        </div>

    );
}

export default Options;