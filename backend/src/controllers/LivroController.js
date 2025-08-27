import { bookRepository } from "../repositories/LivroRepository.js";
import { bookService } from "../services/LivroService.js";

export const bookController = {
    async searchAllBooks(req, res) {
        try {
            const livros = await bookRepository.findAllBooks();
            res.json(livros);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async getBook(req, res) {
        try {
            const id = Number(req.params.id);
            const livro = await bookService.getBookById(id);
            if (!livro) {
                res.status(404).json({ error: error.message });
            }
            res.json(livro);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
}

/**
async function getLivroController(req, res) {
    try {
        const id = Number(req.params.id);
        const livro = await LivroService.getLivroService(id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({ error: 'Livro não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
}

async function getLivrosController(req, res) {
    try {
        const livros = await LivroRepository.getLivrosRepository();
        res.json(livros);
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
}

async function postLivroController(req, res) {
    try {
        const livro = req.body;
        const result = await LivroService.postLivroService(livro);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function patchLivroController(req, res) {
    try {
        const id = Number(req.params.id);
        const livro = req.body;
        const result = await LivroService.updateLivroService(id, livro);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: message });
    }
}

async function deleteLivroController(req, res) {
    try {
        const id = Number(req.params.id);
        await LivroService.deleteLivroService(id);
        res.status(200).json({ message: "Livro removido com sucesso." });
    } catch (error) {
        res.status(400).json({ error: 'Livro não foi encontrado ou não existe.' });
    }
}

 */