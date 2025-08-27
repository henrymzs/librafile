import express from "express";
import { bookController } from "../controllers/LivroController.js"
const router = express.Router();

router.get('/', bookController.searchAllBooks);
router.get('/:id', bookController.getBook);


/*
router.post('/', LivroController.postLivroController);
router.patch('/:id', LivroController.patchLivroController);
router.delete('/:id', LivroController.deleteLivroController);
*/
export default router;
