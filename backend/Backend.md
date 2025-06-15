# Backend do Projeto de Gestão de Livros

Este é o backend de um sistema para gerenciamento de livros. Ele permite **cadastrar, listar, editar, excluir e buscar livros** utilizando uma API REST.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Banco de Dados em memória
- Cors para segurança

---

## Instalação e Configuração

### **Clone o repositório**
```sh
git clone https://github.com/seu-repositorio.git
cd backend
npm install
npm start
```

## API Endpoints

### Listar todos os livros
- GET /livros
Retorna um JSON com todos os livros cadastrados.

### Buscar um livro por ID
- GET /livros/:id
GET /livros/:id
Retorna um livro específico com base no ID.

### Criar um novo livro
- POST /livros
{
  "titulo": "Nome do Livro",
  "autor": "Autor do Livro",
  "anoPublicacao": 2023
}
Retorna o livro criado.

### Editar um livro
- PATCH /livros/:id
{
  "titulo": "Novo Nome",
  "autor": "Novo Autor"
}
Atualiza os dados do livro.

### Excluir um livro
DELETE /livros/:id
Remove o livro do sistema.


