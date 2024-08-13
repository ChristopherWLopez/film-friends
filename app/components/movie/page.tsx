'use client';

import { useEffect, useState } from 'react';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                console.log("Calling /api/movies");

                const response = await fetch('/api/movies');
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                setError(error);
                console.error("Error fetching data:", error);
            }
        };
        fetchMovies();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </>
    );
}
