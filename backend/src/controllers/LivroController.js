import LivroRepository from "../repositories/LivroRepository.js";

async function getLivro(req, res) {
    try {
        const id = Number(req.params.id); 
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido." });
        }
        const livro = await LivroRepository.getLivro(id);
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

async function getLivros(req, res) {
    try {
        const livros = await LivroRepository.getLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
}

async function postLivro(req, res, next) {
    try {
        if (!req.body.titulo || !req.body.autor || !req.body.anoPublicacao) {
            return res.status(400).json({ error: 'Dados do livro incompletos. Título, autor e ano de publicação são obrigatórios.' })
        }
        const livro = req.body;
        const result = await LivroRepository.addLivro(livro);
        if (result) {
            res.status(201).json(result);
        } else {
            res.status(400).json({ error: 'Erro ao adicionar o livro. Verifique os dados enviados.'});
        }
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
}

async function patchLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const livro = req.body;
        const result = await LivroRepository.updateLivro(id, livro);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ error: "Livro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}

async function deleteLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
        const success = await LivroRepository.deleteLivro(id);
        if (success) {
            res.status(200).json({ message: "Livro removido com sucesso." });
        } else {
            res.status(404).json({ error: "Livro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}

export default {
    getLivro,
    getLivros,
    postLivro,
    patchLivro,
    deleteLivro
}