import express from "express";
import LivroController from '../controllers/LivroController.js';
const router = express.Router();

router.get('/:id', LivroController.getLivroController);
router.get('/', LivroController.getLivrosController);
router.post('/', LivroController.postLivroController);
router.patch('/:id', LivroController.patchLivroController);
router.delete('/:id', LivroController.deleteLivroController);

export default router;
