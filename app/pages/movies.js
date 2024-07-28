'use client';
import { useEffect, useState } from 'react';

export default function Movies(){
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        const fetchMovies = async ()=>{
            try{
                const response = await fetch('api/movies');
                const data = await response.json();
                setMovies(data.results);
            }catch(error){
                console.error("Error fetching data:", error);
            }
        };
        fetchMovies();
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