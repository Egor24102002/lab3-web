// pages/api/animalssql.js
import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { searchName, searchBreed, searchAge } = req.body;

    const db = new sqlite3.Database('/home/egor/WebstormProjects/next1/public/animals.db');

    const query = `
        SELECT * 
        FROM animals 
        WHERE 
            ($1 IS NULL OR LOWER(name) LIKE '%' || LOWER($1) || '%')
            AND ($2 IS NULL OR LOWER(breed) LIKE '%' || LOWER($2) || '%')
            AND ($3 IS NULL OR age LIKE '%' || $3 || '%')
    `;

    db.all(query, [searchName, searchBreed, searchAge], (err, rows) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(rows);
        db.close(); // Закрываем соединение после отправки данных
    });
}
