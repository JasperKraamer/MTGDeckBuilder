import axios from 'axios';

const API_URL = 'https://api.datavortex.nl/deckbuildermtg';

const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': 'deckbuildermtg:6rk6IsJiCtWHtF7OgI2B',
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
