import { useEffect, useState } from 'react';

export default function Movies(){
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        fetch('/api/movies')
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching data', error));
    }, []);


return(
    <>
        <h1>Popular Movies</h1>
        <ul>
            {movies.map(movie=>(
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    </>
    );

}