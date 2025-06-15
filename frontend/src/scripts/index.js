const addBookBtn = document.getElementById('addBtn');
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementById('modal-close');
const editModal = document.getElementById('editModal');
const closeEditModal = document.getElementById('edit-close');
const bookForm = document.getElementById('bookForm');
const booksContainer = document.getElementById('booksList');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

addBookBtn.addEventListener('click', () => bookModal.style.display = 'block');
closeModal.addEventListener('click', () => bookModal.style.display = 'none');
closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none';
    document.getElementById('editForm').dataset.bookId = ''; 
});

function createBookElement(book) {
    const bookItem = document.createElement('div');
    bookItem.classList.add('books-card');
    bookItem.innerHTML = `
        <div class="book-item">
            <h3>${book.titulo}</h3>
            <p><strong>Autor:</strong> ${book.autor}</p>
            <button class="edit-btn" data-id="${book.codigo}">Editar</button>
            <button class="remove-btn" data-id="${book.codigo}">Remover</button>
        </div>
    `;
    return bookItem; 
}

function addBookToList(book) {
    const bookItem = createBookElement(book); 
    booksContainer.appendChild(bookItem);
}

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

searchBtn.addEventListener('click', async () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    if (!searchValue) {
        alert('Por favor, insira um termo de busca.');
        return;
    }
    try {
        const books = await fetchBooks();
        const filteredBooks = books.filter(book => book.titulo.toLowerCase().includes(searchValue));
        displayResults(filteredBooks);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        alert('Não foi possível realizar a busca.');
    }
});

function displayResults(books) {
    booksContainer.innerHTML = '';
    if (books.length === 0) {
        booksContainer.innerHTML = '<p>Nenhum livro encontrado.</p>'
        return;
    }
    books.forEach(book => {
        const bookItem = createBookElement(book);
        booksContainer.appendChild(bookItem);
    });
}

async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:3000/livros');
        if (!response.ok) throw new Error("Erro ao buscar livro.");
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar livros: ", error);
    }
}

async function addLivro(title, author, anoPublicacao) {
    if (!title || !author || !anoPublicacao) {
        alert("Preencha todos os campos.")
        return;
    }
    try {
        const response = await fetch('http://localhost:3000/livros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: title, autor: author, anoPublicacao: anoPublicacao })
        });
        if (!response.ok) throw new Error("Erro ao adicionar livro.");
        return await response.json();
    } catch (error) {
        console.error("Erro ao adicionar livro:", error);
        alert("Não foi possível adicionar o livro.");
    }
}

bookForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const anoPublicacao = document.getElementById('bookAnoPublicacao').value.trim();
    const newBook = await addLivro(title, author, anoPublicacao);
    if (newBook) {
        addBookToList(newBook);
        bookModal.style.display = 'none';
        bookForm.reset();
    }
});

function handleRemoveBook(event) {
    const button = event.target.closest('.remove-btn');
    if (!button) return;
    const bookId = button.getAttribute('data-id');
    console.log("ID capturado no frontend:", bookId); 
    if (!bookId || isNaN(Number(bookId))) {
        alert("Erro: ID inválido.");
        return;
    }
    fetch(`http://localhost:3000/livros/${bookId}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) throw new Error("Erro ao remover livro.");
            button.closest('.books-card').remove();
        })
        .catch(error => {
            console.error("Erro ao remover livro:", error);
            alert("Não foi possível remover o livro.");
        });
}
document.addEventListener('click', handleRemoveBook);

async function updateBook(bookId, newTitle, newAuthor) {
    try {
        const response = await fetch(`http://localhost:3000/livros/${bookId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: newTitle, autor: newAuthor })
        });
        if (!response.ok) throw new Error("Erro ao atualizar livro");
        const bookItem = document.querySelector(`.edit-btn[data-id="${bookId}"]`).closest('.book-item');
        if (bookItem) {
            bookItem.querySelector('h3').textContent = newTitle;
            bookItem.querySelector('p').textContent = `Autor: ${newAuthor}`;
        }
        editModal.style.display = 'none';
    } catch (error) {
        console.error("Erro ao salvar alterações:", error);
        alert("Não foi possível atualizar o livro.")
    }
}

document.getElementById('saveChanges').addEventListener('click', async (event) => {
    event.preventDefault();
    const bookId = document.getElementById('editForm').dataset.bookId;
    const newTitle = document.getElementById('editTitle').value.trim();
    const newAuthor = document.getElementById('editAuthor').value.trim();
    if (!newTitle || !newAuthor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    await updateBook(bookId, newTitle, newAuthor);
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-btn')) {
        const bookItem = event.target.closest('.book-item');
        if (!bookItem) return;

        const bookId = event.target.getAttribute('data-id');
        const bookTitle = bookItem.querySelector('h3').textContent;
        const bookAuthor = bookItem.querySelector('p').textContent.replace('Autor: ', '');

        document.getElementById('editTitle').value = bookTitle;
        document.getElementById('editAuthor').value = bookAuthor;
        document.getElementById('editForm').dataset.bookId = bookId;
        editModal.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const livros = await fetchBooks();
        displayResults(livros);
    } catch (error) {
        console.error('Erro ao carregar livros', error);
    }
});









