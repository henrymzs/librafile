import axios from "axios";

export async function getAllBooks() {
    const response = await axios.get('http://localhost:3000/books');
    return response.data;
}

export async function getBookID(id) {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    return response.data;
}

export async function saveBook(bookData) {
    const response = await axios.post('http://localhost:3000/book', bookData);
    return response.data;
}

export async function deleteBook(id) {
    const response = await axios.delete(`http://localhost:3000/book/${id}`);
    return response.data;
}





