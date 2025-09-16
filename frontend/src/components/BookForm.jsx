import { useBookForm } from "../hooks/useBookForm";

function BookForm() {
    const { formData, setters, error, loading, handleSubmit } = useBookForm();
    const { setTitle, setAuthor, setYearPublication, setAvailability } = setters;

    return (
        <form className="form-add" onSubmit={handleSubmit}>
            <div className="form-inputs">
                <div className="form-inputs_left">
                    <span className="form-info">Titulo</span>
                    <input
                        type="text"
                        placeholder="Digite o título do livro"
                        value={formData.title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <span className="form-info">Autor</span>
                    <input
                        type="text"
                        placeholder="Digite o nome do autor"
                        value={formData.author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        disabled={loading}
                    />

                </div>
                <div className="form-inputs_right">
                    <span className="form-info">Ano Publicação</span>
                    <input
                        type="text"
                        placeholder="Digite o ano de publicação"
                        value={formData.yearPublication}
                        onChange={(e) => setYearPublication(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <select 
                        className="form-selection"
                        value={formData.availability}
                        onChange={(e) => setAvailability(e.target.value)}
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