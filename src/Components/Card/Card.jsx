// src/components/Card.jsx
import React from 'react';

const Card = ({ card, onClick }) => (
    <div className="card" onClick={onClick}>
        {card.imageUrl ? (
            <img src={card.imageUrl} alt={card.name} />
        ) : (
            <div className="card-placeholder">{card.name}</div>
        )}
        <p>{card.name}</p>
    </div>
);

export default Card;
