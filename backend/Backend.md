# 📚 Sistema de Biblioteca - Backend API

Uma API REST robusta e eficiente para gerenciamento de bibliotecas, desenvolvida com Node.js e Express. Oferece endpoints completos para operações CRUD de livros com validações e tratamento de erros.

## 🚀 Funcionalidades

- **📖 Gerenciamento Completo de Livros**
  - Listar todos os livros do acervo
  - Buscar livro específico por ID
  - Cadastrar novos livros
  - Remover livros do sistema

- **🔒 Segurança e Validação**
  - Validação de dados de entrada
  - Tratamento de erros

- **⚡ Performance**
  - Banco de dados em memória para respostas rápidas
  - Estrutura otimizada para consultas

## 🛠️ Tecnologias Utilizadas
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **Banco de Dados em Memória** - Armazenamento temporário eficiente

## 🏗️ Estrutura do Projeto

```
backend/
├── src/
│   ├── controllers/     # Controladores das rotas
│   ├── models/          # Modelos de dados
│   ├── repositories/    # Operações no banco de dados em memória
│   ├── routes/          # Definição das rotas
│   ├── services/        # Tratamento de erros e validações
│   └── utils/           # Utilitários e helpers
└── server.js            # Arquivo principal
```

## 📋 Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm ou yarn
- Git

## ⚙️ Instalação e Configuração

### 1. **Clone o repositório**
```bash
git clone https://github.com/henrymzs/librafile.git
cd librabfile/backend
```

### 2. **Instale as dependências**
```bash
npm install
```

### 3. **Configure as variáveis de ambiente** (opcional)
```bash
# Crie um arquivo .env na raiz do projeto
PORT=3000
```

### 4. **Execute o servidor**
```bash
# Modo desenvolvimento
npm run dev

### 📚 **Listar todos os livros**
```http
GET /books
```

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "titulo": "1984",
    "autor": "George Orwell",
    "anoPublicacao": 1949,
    "disponibilidade": true
  },
  {
    "id": 2,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "anoPublicacao": 1899,
    "disponibilidade": false
  }
]
```

---

### 🔍 **Buscar livro por ID**
```http
GET /book/:id
```

**Parâmetros:**
- `id` (integer) - ID único do livro

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "titulo": "1984",
  "autor": "George Orwell",
  "anoPublicacao": 1949,
  "disponibilidade": true
}
```

**Respostas de Erro:**
- `404 Not Found` - Livro não encontrado
- `400 Bad Request` - ID inválido

---

### ➕ **Criar novo livro**
```http
POST /book
```

**Body (JSON):**
```json
{
  "titulo": "O Alquimista",
  "autor": "Paulo Coelho",
  "anoPublicacao": 1988,
  "disponibilidade": true
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 3,
  "titulo": "O Alquimista",
  "autor": "Paulo Coelho",
  "anoPublicacao": 1988,
  "disponibilidade": true,
}
```

**Respostas de Erro:**
- `400 Bad Request` - Dados inválidos ou incompletos
- `409 Conflict` - Livro já existe

---

### 🗑️ **Excluir livro**
```http
DELETE /book/:id
```

**Parâmetros:**
- `id` (integer) - ID do livro a ser removido

**Resposta de Sucesso (200):**
```json
{
  "message": "Livro removido com {id} sucesso",
  "book": {
    "id": 1,
    "titulo": "1984",
    "autor": "Geroge",
    "anoPublicacao": "1984",
    "disponibilidade": true
  }
}
```

**Respostas de Erro:**
- `404 Not Found` - Livro não encontrado

---

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Inicia servidor em desenvolvimento 

```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -am 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Crie um Pull Request

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [henrymzs](https://github.com/henrymzs)
- LinkedIn: [henry-kaua](https://www.linkedin.com/in/henry-kaua/)
- Email: henrykaua21@gmail.com
---

⭐ **Não se esqueça de dar uma estrela se este projeto foi útil para você!**