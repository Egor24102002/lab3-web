// components/AnimalList.js
const AnimalList = ({ animals }) => {
    return (
        <div>
            <h2>Результаты поиска</h2>
            {animals.length > 0 ? (
                <ul>
                    {animals.map((animal, index) => (
                        <li key={index}>
                            <strong>Кличка:</strong> {animal.name}, <strong>Порода:</strong>{' '}
                            {animal.breed}, <strong>Возраст:</strong> {animal.age}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Ничего не найдено.</p>
            )}
        </div>
    );
};

export default AnimalList;
