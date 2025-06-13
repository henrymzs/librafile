import express from "express";
import LivroController from '../controllers/LivroController.js';
const router = express.Router();

router.get('/:id', LivroController.getLivro);
router.get('/', LivroController.getLivros);
router.post('/', LivroController.postLivro);
router.patch('/:id', LivroController.patchLivro);
router.delete('/:id', LivroController.deleteLivro);

export default router;
