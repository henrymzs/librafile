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
    },

    async createBook(newBook) {               
        if (!newBook.titulo || !newBook.autor || !newBook.anoPublicacao) {
            throw new Error('Dados do livro incompletos. Título, autor e ano de publicação são obrigatórios.');
        }

        if (typeof newBook.titulo !== 'string') {
            throw new Error('Título do livro não pode ser número e nem caractere especial.');
        }

        if (typeof newBook.autor !== 'string') {
            throw new Error('Autor do livro não pode ser número e nem caractere especial.');
        }

        if (newBook.titulo === newBook.autor) {
            throw new Error('Titulo e autor não podem ser iguais.');
        }

        const allBooks = await bookRepository.findAllBooks();

        const exists = allBooks.some(
            (bookTemp) =>   bookTemp.titulo.toLowerCase() === newBook.titulo.toLowerCase() &&
                            book.autorTemp.toLowerCase() === newBook.autor.toLowerCase()
        );
        if (exists) {
            throw new Error('Já existe um livro com esse título e autor.');
        }
        const newBookFormate = {
            ...newBook,
            anoPublicacao: Number(newBook.anoPublicacao)
        };

        if (isNaN(newBookFormate.anoPublicacao)) {
            throw new Error('Ano de Publicação inválido');
        }
        return await bookRepository.save(newBookFormate);
    },
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