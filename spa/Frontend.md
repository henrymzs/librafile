# 📚 Sistema de Biblioteca - Frontend

Um sistema para cadastro, busca e controle de empréstimos de livros.

## 🚀 Funcionalidades

- **📖 Gerenciamento de Acervo**
  - Visualização completa do catálogo de livros
  - Filtros por disponibilidade (disponíveis/emprestados)
  - Cards informativos com dados dos livros

- **➕ Cadastro de Livros**
  - Formulário para adicionar novos livros
  - Validação de campos obrigatórios
  - Controle de disponibilidade

- **🔍 Busca Inteligente**
  - Pesquisa de livros por ID
  - Resultados em tempo real
  - Tratamento de erros para livros não encontrados

- **📊 Dashboard**
  - Estatísticas do acervo
  - Cards informativos com métricas importantes
  - Visual limpo e organizado

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca para interfaces de usuário
- **JavaScript ES6+** - Linguagem de programação
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Estilização e layout responsivo
- **Lucide React** - Biblioteca de ícones moderna

## 🏗️ Estrutura do Projeto

```
src/
├── components/             # Componentes reutilizáveis
│   ├── BookCard.js         # Card individual do livro
    ├── BookForm.js         # Componente com validações do formulário
│   ├── BookSearch.js       # Componente de busca
│   ├── EmptyState.js       # Estado vazio personalizado
│   ├── StatsCard.js        # Cards de estatísticas
│   └── TabNavigation.js    # Navegação por abas
├── hooks/                  # Custom hooks
│   └── useBookForm.js      # Hook para gerenciar formulário
|   └── useBooks.js         # Hook para gerenciar livros
|   └── useBookSearch.js    # Hook realizar buscas de livros
├── services/               # Camada de serviços
│   └── BookService.js      # Requisições para a API
├── App.css                 # Arquivo de estilo
└── App.js                  # Componente principal
```

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- API do backend rodando na porta 3000

## ⚙️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/henrymzs/librafile.git
   cd librafile/spa
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a URL da API**
   
   Certifique-se de que a API esteja rodando em `http://localhost:3000` ou ajuste a URL no arquivo `src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'http://localhost:3000';
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🔌 Integração com API

O frontend consume uma API REST com os seguintes endpoints:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/books` | Lista todos os livros |
| GET | `/book/:id` | Busca livro por ID |
| POST | `/book` | Cadastra novo livro |
| DELETE | `/book/:id` | Remove livro |

### Exemplo de estrutura de dados:
```javascript
{
  "codigo": 1,
  "titulo": "1984",
  "autor": "George Orwell",
  "anoPublicacao": 1949,
  "disponibilidade": true
}
```

## 🎯 Uso da Aplicação

### 1. **Visualizar Acervo**
- Acesse a aba "Acervo"
- Use os filtros para ver livros disponíveis ou emprestados
- Visualize informações completas de cada livro

### 2. **Adicionar Livro**
- Navegue para a aba "Adicionar"
- Preencha todos os campos obrigatórios:
  - Título
  - Autor
  - Ano de Publicação
  - Disponibilidade
- Clique em "Salvar Livro"

### 3. **Buscar Livro**
- Acesse a aba "Buscar"
- Digite o ID do livro desejado
- Clique em "Buscar" para ver os resultados

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor

**Henry**
- GitHub: [@henrymzs](https://github.com/henrymzs)
- LinkedIn: [henry-kaua](https://www.linkedin.com/in/henry-kaua/)
- Email: henrykaua21@gmail.com

---

⭐ Não se esqueça de dar uma estrela no projeto se ele foi útil para você!