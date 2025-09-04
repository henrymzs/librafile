import { useBookForm } from "../hooks/useBookForm";

function BookForm() {
    const { formData, setters, error, loading, handleSubmit } = useBookForm();
    const { setTitulo, setAutor, setAnoPublicacao, setDisponibilidade } = setters;

    return (
        <form className="form-add" onSubmit={handleSubmit}>
            <div className="form-inputs">
                <div className="form-inputs_left">
                    <span className="form-info">Titulo</span>
                    <input
                        type="text"
                        placeholder="Digite o título do livro"
                        value={formData.titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <span className="form-info">Autor</span>
                    <input
                        type="text"
                        placeholder="Digite o nome do autor"
                        value={formData.autor}
                        onChange={(e) => setAutor(e.target.value)}
                        required
                        disabled={loading}
                    />

                </div>
                <div className="form-inputs_right">
                    <span className="form-info">Ano Publicação</span>
                    <input
                        type="text"
                        placeholder="Digite o ano de publicação"
                        value={formData.anoPublicacao}
                        onChange={(e) => setAnoPublicacao(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <select 
                        className="form-selection"
                        value={formData.disponibilidade}
                        onChange={(e) => setDisponibilidade(e.target.value)}
                        required
                        disabled={loading}
                    >
                        <option value="">Selecione disponibilidade</option>
                        <option value="true">Disponível</option>
                        <option value="false">Emprestado</option>
                    </select>

                </div>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar"}
            </button>

            {error && (
                <p className="mensagem-erro">{error}</p>
            )}
        </form>
    );
}

export default BookForm;