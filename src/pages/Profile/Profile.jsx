// import  { useEffect, useState } from 'react';
// import './Profile.css';
// import Modal from '../../Components/Modal/Modal.jsx';
//
// const Profile = () => {
//     const [savedCards, setSavedCards] = useState([]);
//     const [savedDeck, setSavedDeck] = useState({});
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedCard, setSelectedCard] = useState(null);
//     const cardsPerPage = 5;
//
//     useEffect(() => {
//         const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
//         setSavedCards(savedCards);
//
//         const savedDeck = JSON.parse(localStorage.getItem('savedDeck')) || {};
//         setSavedDeck(savedDeck);
//     }, []);
//
//     const removeFavorite = (id) => {
//         const updatedCards = savedCards.filter(card => card.id !== id);
//         setSavedCards(updatedCards);
//         localStorage.setItem('savedCards', JSON.stringify(updatedCards));
//     };
//
//     const removeDeckCard = (type, id) => {
//         const updatedDeck = { ...savedDeck };
//         updatedDeck[type] = updatedDeck[type].filter(card => card.id !== id);
//         if (updatedDeck[type].length === 0) {
//             delete updatedDeck[type];
//         }
//         setSavedDeck(updatedDeck);
//         localStorage.setItem('savedDeck', JSON.stringify(updatedDeck));
//     };
//
//     const closeModal = () => {
//         setSelectedCard(null);
//     };
//
//     const indexOfLastCard = currentPage * cardsPerPage;
//     const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//     const currentCards = savedCards.slice(indexOfFirstCard, indexOfLastCard);
//
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//
//     const totalPages = Math.ceil(savedCards.length / cardsPerPage);
//
//     return (
//         <div className="profile background">
//             <div className="left">Profile</div>
//             <div className="right">
//                 <div className="top-right">
//                     My Favorites
//                     <div className="favorites-list">
//                         {currentCards.map(card => (
//                             <div key={card.id} className="card" onClick={() => setSelectedCard(card)}>
//                                 <img src={card.imageUrl} alt={card.name} />
//                                 <p>{card.name}</p>
//                                 <button onClick={(e) => { e.stopPropagation(); removeFavorite(card.id); }}>Remove</button>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="pagination">
//                         {Array.from({ length: totalPages }, (_, index) => (
//                             <button
//                                 key={index + 1}
//                                 onClick={() => paginate(index + 1)}
//                                 className={currentPage === index + 1 ? 'active' : ''}
//                             >
//                                 {index + 1}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="bottom-right">
//                     My Deck
//                     {Object.keys(savedDeck).map(type => (
//                         <div key={type} className="card-item">
//                             <h3>{type}</h3>
//                             <ul>
//                                 {savedDeck[type].map(card => (
//                                     <li key={card.id} onClick={() => setSelectedCard(card)}>
//                                         {card.name}
//                                         <button onClick={(e) => { e.stopPropagation(); removeDeckCard(type, card.id); }}>Remove</button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Modal card={selectedCard} onClose={closeModal} />
//         </div>
//     );
// };
//
// export default Profile;


import { useEffect, useState } from 'react';
import './Profile.css';
import Modal from '../../Components/Modal/Modal.jsx';
import jsPDF from 'jspdf';

const Profile = () => {
    const [savedCards, setSavedCards] = useState([]);
    const [savedDeck, setSavedDeck] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCard, setSelectedCard] = useState(null);
    const cardsPerPage = 5;

    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
        setSavedCards(savedCards);

        const savedDeck = JSON.parse(localStorage.getItem('savedDeck')) || {};
        setSavedDeck(savedDeck);
    }, []);

    const removeFavorite = (id) => {
        const updatedCards = savedCards.filter(card => card.id !== id);
        setSavedCards(updatedCards);
        localStorage.setItem('savedCards', JSON.stringify(updatedCards));
    };

    const removeDeckCard = (type, id) => {
        const updatedDeck = { ...savedDeck };
        updatedDeck[type] = updatedDeck[type].filter(card => card.id !== id);
        if (updatedDeck[type].length === 0) {
            delete updatedDeck[type];
        }
        setSavedDeck(updatedDeck);
        localStorage.setItem('savedDeck', JSON.stringify(updatedDeck));
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = savedCards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(savedCards.length / cardsPerPage);

    // Generate and download the deck as a PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10;

        doc.setFontSize(18);
        doc.text('My Deck Cards', 10, yOffset);
        yOffset += 10;

        Object.keys(savedDeck).forEach(type => {
            doc.setFontSize(14);
            doc.text(`${type} Cards:`, 10, yOffset);
            yOffset += 10;

            savedDeck[type].forEach(card => {
                doc.setFontSize(12);
                doc.text(`- ${card.name}`, 10, yOffset);
                yOffset += 10;
            });

            yOffset += 10;  // Add some space between sections
        });

        doc.save('deck-cards.pdf');  // Download the PDF
    };

    return (
        <div className="profile background">
            <div className="left">Profile</div>
            <div className="right">
                <div className="top-right">
                    My Favorites
                    <div className="favorites-list">
                        {currentCards.map(card => (
                            <div key={card.id} className="card" onClick={() => setSelectedCard(card)}>
                                <img src={card.imageUrl} alt={card.name} />
                                <p>{card.name}</p>
                                <button onClick={(e) => { e.stopPropagation(); removeFavorite(card.id); }}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="bottom-right">
                    My Deck
                    {Object.keys(savedDeck).map(type => (
                        <div key={type} className="card-item">
                            <h3>{type}</h3>
                            <ul>
                                {savedDeck[type].map(card => (
                                    <li key={card.id} onClick={() => setSelectedCard(card)}>
                                        {card.name}
                                        <button onClick={(e) => { e.stopPropagation(); removeDeckCard(type, card.id); }}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Button to generate the PDF */}
                <button onClick={generatePDF}>Download Deck as PDF</button>
            </div>
            <Modal card={selectedCard} onClose={closeModal} />
        </div>
    );
};

export default Profile;
