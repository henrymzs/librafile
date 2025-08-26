import express from "express";
import Router from "./routers/routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/', Router)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});