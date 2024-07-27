import { useState } from 'react';
import Card from './Card/Card.jsx';
import CardModal from './Modal/Modal.jsx';

const CardList = ({ cards }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div>
            <div className="card-list">
                {cards.map((card) => (
                    <Card key={card.id} card={card} onClick={() => setSelectedCard(card)} />
                ))}
            </div>
            {selectedCard && (
                <CardModal
                    card={selectedCard}
                    isOpen={!!selectedCard}
                    onClose={() => setSelectedCard(null)}
                />
            )}
        </div>
    );
};

export default CardList;