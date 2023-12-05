import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const searchItems = async (query) => {
    console.log(API_BASE_URL)
    try {
        const response = await axios.get(`${API_BASE_URL}/movies/v1`, {
            params: {
                name: query,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error searching items:', error);
        throw error;
    }
};

export const getItemById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/v1/${id}`);

        return response.data;
    } catch (error) {
        console.error('Error getting item by id:', error);
        throw error;
    }
};