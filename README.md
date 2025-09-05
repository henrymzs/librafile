# 📚 Sistema de Gerenciamento de Biblioteca

> Uma aplicação web para gerenciamento completo de catálogos de livros, desenvolvida com React e Node.js

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

## 🎯 Visão Geral do Projeto

O Sistema de Gerenciamento de Biblioteca é uma aplicação web full-stack que oferece uma solução completa para gerenciamento de bibliotecas e coleções pessoais de livros. O sistema possui uma interface intuitiva para catalogação, busca e gerenciamento de livros com sincronização em tempo real entre frontend e backend.

### ✨ Principais Funcionalidades

- **📖 Gerenciamento Completo de Livros**
  - Listar todos os livros com opções de filtro
  - Adicionar novos livros com informações detalhadas
  - Editar dados de livros existentes dinamicamente
  - Remover livros com confirmação
  - Status de disponibilidade em tempo real

- **🔍 Busca e Filtros Avançados**
  - Buscar livros por ID, título ou autor
  - Filtrar por status de disponibilidade (disponível/emprestado)
  - Resultados de busca em tempo real
  - Tratamento inteligente de erros para itens não encontrados

- **📊 Dashboard com Estatísticas**
  - Estatísticas totais de livros
  - Métricas de livros disponíveis vs emprestados
  - Representação visual de dados com cards

- **🎨 Interface Moderna**
  - Design responsivo para todos os dispositivos
  - Navegação limpa e intuitiva
  - Estados de carregamento e tratamento de erros
  - Estados vazios com mensagens úteis
  - Sistema de navegação por abas

## 🏗️ Arquitetura

```
sistema-biblioteca/
├── 📁 frontend/              # Aplicação React
│   ├── src/
│   │   ├── components/       # Componentes UI reutilizáveis
│   │   ├── hooks/            # Hooks customizados do React
│   │   ├── services/         # Camada de integração com API
│   └── App.jsx.js            # Componente principal
├── 📁 backend/              # Servidor API Node.js
│   ├── src/
│   │   ├── controllers/     # Controladores de rotas
│   │   ├── models/          # Modelos de dados
│   │   └── routes/          # Rotas da API
│   │   └── repositories/    # Manipulação do array em memória
│   └── server.js            # Arquivo principal do servidor
└── 📁 docs/                # Documentação do projeto
```

## 🛠️ Stack Tecnológico

### Frontend
- **React** - Biblioteca moderna para UI com hooks
- **Axios** - Cliente HTTP para requisições à API
- **Lucide React** - Biblioteca de ícones elegantes
- **CSS** - Estilização moderna com flexbox/grid

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web rápido e minimalista
- **Banco de Dados em Memória** - Armazenamento rápido de dados

## 🚀 Início Rápido

### Pré-requisitos
- Node.js (versão 18.0.0 ou superior)
- Git para controle de versão

### Instalação e Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/henrymzs/librafile.git
   cd librafile
   ```

2. **Configure o Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   # Servidor rodando em http://localhost:PORT
   ```

3. **Configure o Frontend** (em um novo terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   # Aplicação rodando em http://localhost:PORT
   ```

4. **Acesse a aplicação**
   
   Abra seu navegador e navegue para `http://localhost:PORT`

## 📖 Documentação

Para documentação técnica detalhada, consulte:

- **[📱 Documentação do Frontend](./doc/Frontend.md)** - Componentes React, hooks e serviços
- **[⚙️ Documentação do Backend](./doc/Backend.md)** - Endpoints da API, modelos e arquitetura

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. **Faça um fork do repositório**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-funcionalidade-incrivel
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade incrível'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-funcionalidade-incrivel
   ```
5. **Abra um Pull Request**



⭐ **Não se esqueça de dar uma estrela neste repo se foi útil para você!**
