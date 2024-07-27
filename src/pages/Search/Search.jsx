import  { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../../Components/Pagination.jsx';
import Modal from '../../Components/Modal/Modal.jsx';

const CardSearch = () => {
    const [name, setName] = useState('');
    const [set, setSet] = useState('');
    const [type, setType] = useState('');
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(14);
    const [totalCount, setTotalCount] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);

    const cardTypes = [
        "Artifact",
        "Conspiracy",
        "Creature",
        "Enchantment",
        "Instant",
        "Land",
        "Plane",
        "Planeswalker",
        "Sorcery",
    ];

    const searchCards = async () => {
        const response = await axios.get('https://api.magicthegathering.io/v1/cards', {
            params: {
                name,
                set,
                type,
                page,
                pageSize
            },
        });
        setCards(response.data.cards);
        setTotalCount(parseInt(response.headers['total-count'], 10));
    };

    useEffect(() => {
        searchCards();
    }, [page]);

    const closeModal = () => {
        setSelectedCard(null);
    };

    const addToFavorites = (card) => {
        const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
        if (!savedCards.some(savedCard => savedCard.id === card.id)) {
            savedCards.push(card);
            localStorage.setItem('savedCards', JSON.stringify(savedCards));
        }
    };

    const addToDeck = (card) => {
        const savedDeck = JSON.parse(localStorage.getItem('savedDeck')) || {};
        if (!savedDeck[card.type]) {
            savedDeck[card.type] = [];
        }
        if (!savedDeck[card.type].some(savedCard => savedCard.id === card.id)) {
            savedDeck[card.type].push({ id: card.id, name: card.name });
            localStorage.setItem('savedDeck', JSON.stringify(savedDeck));
        }
    };

    return (
        <div className="background">
            <div className='page-content'>
                <div className="search-container">
                    <input
                        placeholder="Search Card Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="Search Set Name"
                        value={set}
                        onChange={(e) => setSet(e.target.value)}
                    />
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        {cardTypes.map((cardType) => (
                            <option key={cardType} value={cardType}>{cardType}</option>
                        ))}
                    </select>
                    <button onClick={() => { setPage(1); searchCards(); }}>Search</button>
                </div>
                <section className='kaartjes'>
                    <div className="search-result">
                        {cards.map(card => (
                            <div key={card.id} className="card-item" onClick={() => setSelectedCard(card)}>
                                <h2>{card.name}</h2>
                                {card.imageUrl && <img src={card.imageUrl} alt={card.name}/>}
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    addToFavorites(card);
                                }}>Add to Favorites
                                </button>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    addToDeck(card);
                                }}>Add to Deck
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <Pagination
                    totalCount={totalCount}
                    pageSize={pageSize}
                    currentPage={page}
                    onPageChange={setPage}
                />
                <Modal card={selectedCard} onClose={closeModal} />
            </div>
        </div>
    );
};

export default CardSearch;
