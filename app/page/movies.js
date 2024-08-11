'use client';

import { useEffect, useState } from 'react';

export default function Movies(){


    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchMovies = async ()=>{
            try{
                console.log("calling api/movies");

                const response = await fetch('/api/movies');
                if(!response.ok){
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                console.log(data);
                setMovies(data.results);
            }catch(error){
                console.error("Error fetching data:", error);
                setError(error)
            }
        };
        fetchMovies();
    }, []);

    if(error){
        return <div>err.message</div>
    }

return(
    <>
        <h1>Popular Movies</h1>
        <ul>
            console.log(movies);
            {movies.map(movie=>(
                <li key={movie.id}>{movie.title}</li>
                
            ))}
        </ul>

        
    </>
    );
}