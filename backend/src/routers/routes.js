import express from "express";
import { bookController } from "../controllers/BookController.js"
const router = express.Router();

router.get('/books/', bookController.searchAllBooks);
router.get('/book/:id', bookController.getBook);
router.post('/book/', bookController.createBook);
router.get('/books/filter/:disponibilidade', bookController.getAvailableBooks);
router.delete('/book/:id', bookController.deleteBook);

export default router;
