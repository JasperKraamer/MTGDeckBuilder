import React from 'react';

const Card = ({ card, onClick, onRemoveFromFavorites,  onAddToDeck, onAddToFavorites, onRemoveFromDeck, isInDeck, count }) => {
    return (
        <div className="card">
            <img
                src={card.imageUrl}
                alt={card.name}
                onClick={() => onClick(card)}
            />
            <div className="card-details">
                <h2>{card.name}</h2>
                {isInDeck && count > 1 && <span className="card-count">x{count}</span>}
                <div className="card-buttons">
                    {onRemoveFromFavorites && (
                        <button onClick={() => onRemoveFromFavorites(card.id)}>Remove from Favorites</button>
                    )}
                    {onAddToDeck && (
                        <button onClick={() => onAddToDeck(card)}>Add to Deck</button>
                    )}
                    {onRemoveFromDeck && isInDeck && (
                        <button onClick={() => onRemoveFromDeck(card.id)}>Remove from Deck</button>
                    )}
                    {onAddToFavorites && (
                        <button onClick={() => onAddToFavorites(card)}>Add to Favorites</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
