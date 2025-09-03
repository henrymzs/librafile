import { useBookForm } from "../hooks/useBookForm";

function BookForm() {
    const { formData, setters, mensagemSucesso, error, loading, handleSubmit } = useBookForm();
    const { setTitulo, setAutor, setAnoPublicacao, setDisponibilidade } = setters;

    return (
        <form className="form-add" onSubmit={handleSubmit}>
            <h3>Adicione Livros</h3>
            <div className="form-inputs">
                <input
                    type="text"
                    placeholder="Título do livro"
                    value={formData.titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={formData.autor}
                    onChange={(e) => setAutor(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type="number"
                    placeholder="Ano de Publicação"
                    value={formData.anoPublicacao}
                    onChange={(e) => setAnoPublicacao(e.target.value)}
                    min="1000"
                    max="2030"
                    required
                    disabled={loading}
                />
                <select
                    value={formData.disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value === "true")}
                    required
                    disabled={loading}
                >
                    <option value="">Selecione disponibilidade</option>
                    <option value="true">Disponível</option>
                    <option value="false">Indisponível</option>
                </select>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar"}
            </button>

            {mensagemSucesso && (
                <p className="mensagem-sucesso">{mensagemSucesso}</p>
            )}

            {error && (
                <p className="mensagem-erro">{error}</p>
            )}
        </form>
    );
}

export default BookForm;