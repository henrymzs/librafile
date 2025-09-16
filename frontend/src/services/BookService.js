import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const getAllBooks = async () => {
    const response = await axios.get(`${API_BASE_URL}/books/`);
    return response.data || response.data || []; 
};

export const getBookID = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/book/${id}`);
    return response.data.book || response.data; 
};

export const saveBook = async (bookData) => {
    const response = await axios.post(`${API_BASE_URL}/book/`, bookData);
    return response.data.book || response.data; 
};

export const deleteBook = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/book/${id}`);
    return response.data.book || response.data; 
};
