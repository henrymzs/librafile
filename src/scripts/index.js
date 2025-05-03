const addBookBtn = document.getElementById('addBtn');
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementById('modal-close');
const editModal = document.getElementById('editModal');
const closeEditModal = document.getElementById('edit-close');
const bookForm = document.getElementById('bookForm');
const booksContainer = document.getElementById('booksList');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// Deve pesquisar livros já carregados na DOM
function searchBooks() {
    let livros = document.querySelectorAll("#booksList .books-card"); 
    let busca = document.getElementById("searchInput").value.trim();
    if (busca.length > 0) {
        livros.forEach(livro => {
            let titulo = livro.querySelector("h3").innerText; 
            if (!titulo.toLowerCase().includes(busca.toLowerCase())) {
                livro.classList.add("oculto"); 
            } else {
                livro.classList.remove("oculto"); 
            }
        });
    } else {
        livros.forEach(livro => {
            livro.classList.remove("oculto");
        });
    }
}

// Deve buscar livro na API
searchBtn.addEventListener('click', async () => {
    const searchValue = searchInput.value.trim();

    if (!searchValue) {
        alert('Por favor, insira um termo de busca.');
        return;
    }

    try {
        const response = await fetch('https://livros.acilab.com.br/api/livros');
        const books = await response.json();

        const filteredBooks = !isNaN(searchValue)
            ? books.filter(book => book.id === parseInt(searchValue))
            : books.filter(book => book.titulo.toLowerCase().includes(searchValue.toLowerCase()));

        displayResults(filteredBooks);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        alert('Não foi possível realizar a busca.');
    }
});

addBookBtn.addEventListener('click', () => bookModal.style.display = 'block');
closeModal.addEventListener('click', () => bookModal.style.display = 'none');
closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none';
    document.getElementById('editForm').dataset.bookId = ''; // Reseta o ID do livro
});

async function loadBooksFromAPI() {
    try {
        const response = await fetch('https://livros.acilab.com.br/api/livros');
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Erro ao carregar livros:', error);
    }
}

window.addEventListener('DOMContentLoaded', loadBooksFromAPI);

function displayResults(books) {
    booksContainer.innerHTML = ''; // Limpa resultados anteriores

    if (books.length === 0) {
        booksContainer.innerHTML = '<p>Nenhum livro encontrado.</p>';
        return;
    }

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('books-card');

        bookItem.innerHTML = `
            <h3>${book.titulo}</h3>
            <p><strong>Autor:</strong> ${book.autor}</p>
            <button class="edit-btn" data-id="${book.id}">Editar</button>
            <button class="remove-btn" data-id="${book.id}">Remover</button>
        `;

        booksContainer.appendChild(bookItem);
    });

    addRemoveEvents();
    addEditEvents();
}

bookForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();

    if (!title || !author) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await fetch('https://livros.acilab.com.br/api/livros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: title, autor: author })
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar o livro.');
        }

        const newBook = await response.json();
        addBookToList(newBook);

        bookModal.style.display = 'none';
        bookForm.reset();
    } catch (error) {
        console.error('Erro ao salvar livro:', error);
        alert('Não foi possível salvar o livro.');
    }
});

function addBookToList(book) {
    const bookItem = document.createElement('div');
    bookItem.classList.add('books-card');

    bookItem.innerHTML = `
        <h3>${book.titulo}</h3>
        <p><strong>Autor:</strong> ${book.autor}</p>
        <button class="edit-btn" data-id="${book.id}">Editar</button>
        <button class="remove-btn" data-id="${book.id}">Remover</button>
    `;

    booksContainer.appendChild(bookItem);
    addRemoveEvents();
    addEditEvents();
}

function addEditEvents() {
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const bookId = event.target.getAttribute('data-id');
            const bookTitle = event.target.parentElement.querySelector('h3').textContent;
            const bookAuthor = event.target.parentElement.querySelector('p').textContent.replace('Autor: ', '');

            document.getElementById('editTitle').value = bookTitle;
            document.getElementById('editAuthor').value = bookAuthor;
            document.getElementById('editForm').dataset.bookId = bookId;

            editModal.style.display = 'block';
        });
    });

    document.getElementById('saveChanges').addEventListener('click', async (event) => {
        event.preventDefault();

        const bookId = document.getElementById('editForm').dataset.bookId;
        const newTitle = document.getElementById('editTitle').value.trim();
        const newAuthor = document.getElementById('editAuthor').value.trim();

        if (!newTitle || !newAuthor) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch(`https://livros.acilab.com.br/api/livros/${bookId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo: newTitle, autor: newAuthor })
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar o livro.');
            }

            const bookElement = document.querySelector(`[data-id="${bookId}"]`).parentElement;
            bookElement.querySelector('h3').textContent = newTitle;
            bookElement.querySelector('p').textContent = `Autor: ${newAuthor}`;

            editModal.style.display = 'none';
        } catch (error) {
            console.error('Erro ao salvar alterações:', error);
            alert('Não foi possível atualizar o livro.');
        }
    });
}

// ==== SEÇÃO: Remover Livro ====
function addRemoveEvents() {
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', async (event) => {
            const bookId = event.target.getAttribute('data-id');

            try {
                await fetch(`https://livros.acilab.com.br/api/livros/${bookId}`, { method: 'DELETE' });
                event.target.parentElement.remove();
            } catch (error) {
                console.error('Erro ao remover livro:', error);
                alert('Não foi possível remover o livro.');
            }
        });
    });
}

