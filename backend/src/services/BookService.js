import { bookRepository } from "../repositories/BookRepository.js";
import { validateId } from "../utils/utils.js";

export const bookService = {
    async getBookById(id) {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        const livro = await bookRepository.findById(id);
        if (!livro) {
            throw new Error('Livro não encontrado');
        }
        return livro;
    }
}
/** 
async function getLivroService(id) {
    id = validateId(id);
    const livro = await LivroRepository.getLivroRepository(id);
    return livro ? livro : null;
}

async function postLivroService(livro) {
    if (!livro.titulo || !livro.autor || !livro.anoPublicacao) {
        throw new Error("Dados do livro incompletos. Título, autor e ano são obrigatórios.");
    }
    return await LivroRepository.postLivroRepository(livro);
}

async function updateLivroService(id, livro) {
    id = validateId(id);
    if (!livro || Object.keys(livro).length === 0) {
        throw new Error("Nenhum dado válido para atualização");
    }
    const livroAtualizado = await LivroRepository.updateLivroRepository(id, livro);
    if (!livroAtualizado) {
        throw new Error("Livro não encontrado");
    }
    return livroAtualizado;
}

async function deleteLivroService(id) {
    id = validateId(id);
    const success = await LivroRepository.deleteLivroRepository(id);
    if (!success) {
        throw new Error("Livro não encontrado");
    }
    return success;
}

export default { 
    postLivroService,
    updateLivroService,
    deleteLivroService
  }*/