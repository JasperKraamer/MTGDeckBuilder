// src/context/CardContext.jsx
import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [savedCards, setSavedCards] = useState([]);

    const addCard = (card) => {
        setSavedCards([...savedCards, card]);
    };

    const removeCard = (id) => {
        setSavedCards(savedCards.filter(card => card.id !== id));
    };

    return (
        <CardContext.Provider value={{ savedCards, addCard, removeCard }}>
            {children}
        </CardContext.Provider>
    );
};