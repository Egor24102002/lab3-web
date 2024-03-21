// pages/animal-search.js
import React, { useState } from 'react';
import animalsData from '../public/animals2.json';
import AnimalList from '../components/AnimalList';

const SearchPage = () => {
    const [searchName, setSearchName] = useState('');
    const [searchBreed, setSearchBreed] = useState('');
    const [searchAge, setSearchAge] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = animalsData.filter(animal => {
            const nameMatch = !searchName || (animal.name && animal.name.toLowerCase().includes(searchName.toLowerCase()));
            const breedMatch = !searchBreed || (animal.breed && animal.breed.toLowerCase().includes(searchBreed.toLowerCase()));
            const ageMatch = !searchAge || (animal.age && animal.age.toString().includes(searchAge));
            return nameMatch && breedMatch && ageMatch;
        });
        setSearchResults(results);
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
