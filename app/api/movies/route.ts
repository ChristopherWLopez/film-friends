import { NextApiRequest, NextApiResponse } from  'next';
import { NextResponse } from 'next/server';

export default async function GET(){

    const API_KEY = process.env.TMDB_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        return NextResponse.json(data);
    }catch(error){
        console.error('this is the error', error);
       return NextResponse.json({ error: "Failed to fetch" + error});
    }
}