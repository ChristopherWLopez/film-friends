

export default async function handler(req, res){

    const API_KEY = process.env.TMB_API_KEY;

    if(!API_KEY){
        return res.status(500).json({ error: "API key not found" });
    }

    try{
        console.log("fetching  movies");
        const response = await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

        if(!response.ok){
            throw new Error(`failed to fetch movies: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Movies data',data);
        res.status(200).json(data);

    }catch(error){
        console.error('Error fetching data', error);
        res.status(500).json({ error: error.message });
    }

}