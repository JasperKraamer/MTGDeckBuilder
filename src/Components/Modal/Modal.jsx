
// src/components/CardModal.jsx
import React from 'react';
import Modal from 'react-modal';

const CardModal = ({ card, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Card Details"
            overlayClassName="card-modal-overlay"
            ariaHideApp={false}
        >
            <div className="card-modal-content">
                <img src={card.imageUrl} alt={card.name} className="card-modal-image" />
                <div className="card-modal-details">
                    <h2>{card.name}</h2>
                    <p><strong>Mana Cost:</strong> {card.manaCost}</p>
                    <p><strong>Types:</strong> {card.type}</p>
                    <p><strong>Card Text:</strong> {card.text}</p>
                    <p><strong>Flavor Text:</strong> {card.flavor}</p>
                    <p><strong>Expansion:</strong> {card.setName}</p>
                    <p><strong>Rarity:</strong> {card.rarity}</p>
                </div>
            </div>
            <button onClick={onClose} className="card-modal-close">Close</button>
        </Modal>
    );
};

export default CardModal;