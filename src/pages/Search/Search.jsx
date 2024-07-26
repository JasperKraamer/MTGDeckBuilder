// src/components/CardSearch.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from '../../Components/CardList.jsx';
import Pagination from '../../Components/Pagination.jsx';

const CardSearch = () => {
    const [name, setName] = useState('');
    const [set, setSet] = useState('');
    const [type, setType] = useState('');
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(14);
    const [totalCount, setTotalCount] = useState(0);

    const cardTypes = [
        "Artifact",
        "Conspiracy",
        "Creature",
        "Enchantment",
        "Instant",
        "Land",
        "Phenomenon",
        "Plane",
        "Planeswalker",
        "Scheme",
        "Sorcery",
        "Tribal",
        "Vanguard"
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

    return (
        <container className="background">
        <div>
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
                    <option value="">Select Card Type</option>
                    {cardTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <button onClick={searchCards}>Search</button>
            </div>
            <div className="search-result">
            <CardList cards={cards} />
            <Pagination
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={page}
                onPageChange={setPage}
            />
            </div>
        </div>
</container>
    );
};

export default CardSearch;
