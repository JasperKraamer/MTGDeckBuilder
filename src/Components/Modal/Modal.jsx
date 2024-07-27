import React from 'react';
import './Modal.css'

const Modal = ({ card, onClose }) => {
    if (!card) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{card.name}</h2>
                <img src={card.imageUrl} alt={card.name}/>
                <p>{card.text}</p>
                <p><strong>Set:</strong> {card.setName}</p>
                <p><strong>Type:</strong> {card.type}</p>
                <p><strong>ManaCost:</strong> {card.manaCost}</p>
                <p><strong>Colors:</strong> {card.colors}</p>
                <p><strong>Artist:</strong> {card.artist}</p>
                {/* Voeg hier alle andere gewenste kaartdetails toe */}
            </div>
        </div>
    );
};

export default Modal;