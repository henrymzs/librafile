import axios from "axios";

const API_BASE_URL = 'http://localhost:3000';

export async function getAllBooks() {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
}

export async function getBookID(id) {
    const response = await axios.get(`${API_BASE_URL}/book/${id}`);
    return response.data;
}

export async function saveBook(bookData) {
    const response = await axios.post(`${API_BASE_URL}/book`, bookData);
    return response.data;
}

export async function deleteBook(id) {
    const response = await axios.delete(`${API_BASE_URL}/book/${id}`);
    return response.data;
}





