import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_API_KEY,
};

// Functie om een gebruiker te registreren
export const registerUser = async (username, email, password, info, applicationName) => {
    try {
        const response = await axios.post(
            `${API_URL}/users`,
            { username, email, password, info, authorities: [{ authority: 'USER' }], applicationName },
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Functie om een JWT-token te verkrijgen bij login
export const authenticateUser = async (username, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/users/authenticate`,
            { username, password },
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error('Authentication error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
