// pages/animal-search.js
import React, { useState } from 'react';
import AnimalList from '../components/AnimalList';
import axios from 'axios';

const SearchPage = () => {
    const [searchName, setSearchName] = useState('');
    const [searchBreed, setSearchBreed] = useState('');
    const [searchAge, setSearchAge] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('/api/animalsql', {
                searchName,
                searchBreed,
                searchAge
            });
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Поиск животных</h1>
            <div>
                <input
                    type="text"
                    placeholder="Поиск по кличке"
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}
                />
                <button onClick={handleSearch}>Поиск по кличке</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Поиск по породе"
                    value={searchBreed}
                    onChange={e => setSearchBreed(e.target.value)}
                />
                <button onClick={handleSearch}>Поиск по породе</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Поиск по возрасту"
                    value={searchAge}
                    onChange={e => setSearchAge(e.target.value)}
                />
                <button onClick={handleSearch}>Поиск по возрасту</button>
            </div>
            <AnimalList animals={searchResults} />
        </div>
    );
};

export default SearchPage;
