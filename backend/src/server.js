import express from "express";
import LivroRouter from "./routers/routes.js";

const app = express();
app.use(express.json());
app.use('/livros', LivroRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});